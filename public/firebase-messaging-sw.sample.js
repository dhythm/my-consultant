importScripts('https://www.gstatic.com/firebasejs/5.5.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.5.2/firebase-messaging.js');

const firebaseConfig = {
  messagingSenderId: 'FIREBASE_SENDER_ID',
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload,
  );
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions,
  );
});

self.addEventListener('push', function (event) {
  console.log('[firebase-messaging-sw.js] Received message');
  const data = event?.data?.json();
  console.log({ ...data });
  // collapse_key: string
  // from: string
  // notification: {
  //   body: string
  //   icon: string
  //   title: string
  // }
  const notificationTitle = 'Message Title';
  const notificationOptions = {
    body: 'Message body.',
  };

  event.waitUntil(
    self.registration.showNotification(notificationTitle, notificationOptions),
  );
});
