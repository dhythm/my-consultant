import { FIREBASE_SENDER_ID } from '@core/lib/firebase';
import * as firebase from 'firebase/app';
import 'firebase/messaging';

const firebaseConfig = {
  messagingSenderId: FIREBASE_SENDER_ID,
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

  return (self as any).registration.showNotification(
    notificationTitle,
    notificationOptions,
  );
});

self.addEventListener('push', function (event: any) {
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
  };

  event.waitUntil(
    (self as any).registration.showNotification(
      notificationTitle,
      notificationOptions,
    ),
  );
});
