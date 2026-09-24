const CACHE_NAME = 'arcade-collection-v0.0.44-arcade-coin-shop';
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
   BACKGROUND PUSH & PERIODIC SYNC WITH 2000 COINS ACTION BUTTON
   ========================================================================== */
const TIER_MESSAGES = [
  { title: '🎮 Pause vorbei – Zeit zu spielen!', body: 'Die Arcade vermisst dich! Tippe auf den Button und hol dir +2.000 Coins!' },
  { title: '🔋 Arcade-Energie wieder 100%!', body: 'Deine Energie ist voll aufgeladen! Schnapp dir deine +2.000 Coins und spiele eine Runde.' },
  { title: '🏎️ Rivalen-Alarm auf der Rennstrecke!', body: 'Deine Gegner trainieren in Mario Kart... Hol dir deine +2.000 Bonus-Coins ab!' },
  { title: '🎁 Täglicher Schatzkammer-Bonus!', body: 'Deine +2.000 Gratis-Münzen stehen bereit! Tippe auf den Button und hol dir deine Belohnung!' }
];

function getRandomTierNotification() {
  const item = TIER_MESSAGES[Math.floor(Math.random() * TIER_MESSAGES.length)];
  return {
    title: item.title,
    options: {
      body: item.body,
      icon: './icon-192.png',
      badge: './icon-192.png',
      vibrate: [300, 150, 300, 150, 400],
      tag: 'arcade-background-reminder',
      renotify: true,
      requireInteraction: true,
      actions: [
        { action: 'claim_2000_coins', title: '🎁 +2.000 Coins abholen' }
      ],
      data: { url: './?claim=2000_coins', reward: 2000 }
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

// 3. Web Push API Event (receives remote push notifications from Apple APNs / Google FCM when phone is locked/off)
self.addEventListener('push', (event) => {
  let title = '🎮 Noel Arcade Universe';
  let options = {
    body: 'Es gibt Neuigkeiten in deiner Arcade! Tippe hier für +2.000 Coins!',
    icon: './icon-192.png',
    badge: './icon-192.png',
    vibrate: [300, 150, 300, 150, 400],
    tag: 'arcade-remote-push-' + Date.now(),
    renotify: true,
    requireInteraction: true,
    actions: [
      { action: 'claim_2000_coins', title: '🎁 +2.000 Coins abholen' }
    ],
    data: { url: './?claim=2000_coins', reward: 2000 }
  };

  if (event.data) {
    try {
      const payload = event.data.json();
      if (payload.title) title = payload.title;
      if (payload.body) options.body = payload.body;
      if (payload.icon) options.icon = payload.icon;
      if (payload.tag) options.tag = payload.tag;
      if (Array.isArray(payload.actions) && payload.actions.length > 0) {
        options.actions = payload.actions;
      }
      if (payload.data) {
        options.data = payload.data;
      }
    } catch (e) {
      options.body = event.data.text();
    }
  }

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

// 4. Notification Click & Action Button Handling (wakes app, focuses window, and awards coins)
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  const rewardAmount = (event.notification.data && event.notification.data.reward) ? event.notification.data.reward : 2000;
  const targetUrl = './?claim=' + rewardAmount + '_coins&t=' + Date.now();

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url && 'focus' in client) {
          client.postMessage({
            type: 'CLAIM_CUSTOM_COINS',
            amount: rewardAmount,
            action: event.action || 'click',
            title: event.notification.title || 'Benachrichtigung'
          });
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(targetUrl);
      }
    })
  );
});
