const fs = require('fs');
const webpush = require('web-push');

const VAPID_PUBLIC_KEY = 'BD2uOQA-nA5BmkTWcBlSjPRXuA33XbCvxJsDsa_TjLHmEEEJ8fzgv_hbw6-x9pkOlusEXOdVSK6k-fUPF7RkYjY';
const VAPID_PRIVATE_KEY = 'ruHeMPeDaiIz75fxVIo4XN923MujiLvDjIrUqnOT3iQ';

webpush.setVapidDetails('mailto:noel190427@gmail.com', VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY);

const TIER_MESSAGES = [
  { title: '🎮 Pause vorbei – Zeit zu spielen!', body: 'Die Arcade vermisst dich! Schnapp dir ein schnelles Duell in Mario Kart oder Snake.' },
  { title: '🔋 Arcade-Energie wieder 100%!', body: 'Deine Energie ist voll aufgeladen! Zeit für eine Runde Super Mario Run.' },
  { title: '🏎️ Rivalen-Alarm auf der Rennstrecke!', body: 'Deine Gegner trainieren in Mario Kart... Zeig ihnen, wer der Champion ist!' },
  { title: '🎁 Täglicher Schatzkammer-Bonus!', body: 'Deine +500 Gratis-Münzen stehen bereit! Komm vorbei und hol dir deine Belohnung ab.' }
];

async function main() {
  const subscribersFile = 'subscribers.json';
  if (!fs.existsSync(subscribersFile)) {
    console.log('No subscribers.json found.');
    return;
  }

  const subscribers = JSON.parse(fs.readFileSync(subscribersFile, 'utf8'));
  if (!Array.isArray(subscribers) || subscribers.length === 0) {
    console.log('No subscribers registered yet.');
    return;
  }

  const msg = TIER_MESSAGES[Math.floor(Math.random() * TIER_MESSAGES.length)];
  console.log(`Sending scheduled push to ${subscribers.length} devices: "${msg.title}"`);

  const payload = JSON.stringify({
    title: msg.title,
    body: msg.body,
    icon: './icon-192.png',
    badge: './icon-192.png',
    tag: 'arcade-hourly-' + Date.now(),
    actions: [
      { action: 'claim_2000_coins', title: '🎁 +2.000 Coins abholen' }
    ],
    data: { url: './?claim=2000_coins', reward: 2000 }
  });

  const results = await Promise.allSettled(
    subscribers.map(sub => webpush.sendNotification(sub, payload))
  );

  console.log(`Sent: ${results.filter(r => r.status === 'fulfilled').length} succeeded, ${results.filter(r => r.status === 'rejected').length} failed.`);
}

main().catch(console.error);
