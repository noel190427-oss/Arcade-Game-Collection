const CACHE_NAME = 'arcade-collection-v0.0.33-update-notifications';
const APP_SHELL = [
  './',
  './index.html',
  './privacy.html',
  './style.css',
  './script.js',
  './paho-mqtt.js',
  './manifest.json',
  './favicon.svg'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Network-First for HTML and JS to ensure instant multiplayer sync and updates
  if (event.request.mode === 'navigate' || url.pathname.endsWith('.js') || url.pathname.endsWith('.html')) {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
          }
          return networkResponse;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Cache-first for images/styles
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});

/* ==========================================================================
   BACKGROUND PUSH & PERIODIC SYNC (WORKS WHEN APP IS CLOSED)
   ========================================================================== */
const TIER_MESSAGES = [
  { title: '🎮 Pause vorbei – Zeit zu spielen!', body: 'Die Arcade vermisst dich! Schnapp dir ein schnelles Duell in Mario Kart oder Snake.' },
  { title: '🔋 Arcade-Energie wieder 100%!', body: 'Deine Energie ist voll aufgeladen! Zeit für eine Runde Super Mario Run.' },
  { title: '🏎️ Rivalen-Alarm auf der Rennstrecke!', body: 'Deine Gegner trainieren in Mario Kart... Zeig ihnen, wer der Champion ist!' },
  { title: '🎁 Täglicher Schatzkammer-Bonus!', body: 'Deine +500 Gratis-Münzen stehen bereit! Komm vorbei und hol dir deine Belohnung ab.' }
];

function getRandomTierNotification() {
  const item = TIER_MESSAGES[Math.floor(Math.random() * TIER_MESSAGES.length)];
  return {
    title: item.title,
    options: {
      body: item.body,
      icon: './icon-192.png',
      badge: './icon-192.png',
      vibrate: [200, 100, 200],
      tag: 'arcade-background-reminder',
      renotify: true,
      data: { url: './' }
    }
  };
}

// 1. Periodic Background Sync (runs in background even when browser/app is closed)
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'arcade-hourly-check' || event.tag === 'arcade-reminder' || event.tag === 'arcade-daily-bonus') {
    const notif = getRandomTierNotification();
    event.waitUntil(
      self.registration.showNotification(notif.title, notif.options)
    );
  }
});

// 2. Background Sync fallback
self.addEventListener('sync', (event) => {
  if (event.tag === 'arcade-background-check') {
    const notif = getRandomTierNotification();
    event.waitUntil(
      self.registration.showNotification(notif.title, notif.options)
    );
  }
});

// 3. Web Push API Event (receives remote push notifications while app is closed)
self.addEventListener('push', (event) => {
  let title = '🎮 Noel Arcade Universe';
  let options = {
    body: 'Es wird Zeit für eine neue Runde!',
    icon: './icon-192.png',
    badge: './icon-192.png',
    vibrate: [200, 100, 200],
    data: { url: './' }
  };

  if (event.data) {
    try {
      const payload = event.data.json();
      if (payload.title) title = payload.title;
      if (payload.body) options.body = payload.body;
      if (payload.icon) options.icon = payload.icon;
    } catch (e) {
      options.body = event.data.text();
    }
  }

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

// 4. Notification Click Handling (focuses or opens app)
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow('./');
      }
    })
  );
});
