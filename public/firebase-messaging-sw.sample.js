importScripts('https://www.gstatic.com/firebasejs/5.5.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.5.2/firebase-messaging.js');

const FIREBASE_API_KEY = '';
const FIREBASE_PROJECT_ID = '';
const FIREBASE_VAPID_KEY = '';
const FIREBASE_SENDER_ID = '';

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: `${FIREBASE_PROJECT_ID}.firebaseapp.com`,
  projectId: FIREBASE_PROJECT_ID,
  messagingSenderId: FIREBASE_SENDER_ID,
};
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
messaging.usePublicVapidKey(FIREBASE_VAPID_KEY);

messaging.onMessage(payload => {
  console.log('Message received. ', payload);
});

messaging
  .getToken()
  .then(currentToken => {
    if (currentToken) {
      document.getElementById('token').textContent = currentToken;
    } else {
      console.log(
        'No Instance ID token available. Request permission to generate one.',
      );
    }
  })
  .catch(err => {
    console.log('An error occurred while retrieving token. ', err);
  });

messaging.setBackgroundMessageHandler(function (payload) {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload,
  );
  // Customize notification here
  let notificationTitle = 'Background Message Title';
  let notificationOptions = {
    body: 'Background Message body.',
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions,
  );
});

self.addEventListener('push', function (event) {
  const title = 'ONIAI';
  const options = {
    body: 'あなたのプロフィールがイイねされました',
    // 通知の右にでる画像
    icon: '',
    // 通知の左にでる画像
    badge: '',
  };

  event.waitUntil(self.registration.showNotification(title, options));
});
