import '@firebase/app';
import '@firebase/messaging';
import * as firebase from 'firebase/app';

// importScripts('https://www.gstatic.com/firebasejs/5.5.2/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/5.5.2/firebase-messaging.js');

const FIREBASE_API_KEY = process.env.FIREBASE_API_KEY;
const FIREBASE_PROJECT_ID = process.env.FIREBASE_PROJECT_ID;
const FIREBASE_VAPID_KEY = process.env.FIREBASE_VAPID_KEY;
const FIREBASE_SENDER_ID = process.env.FIREBASE_SENDER_ID;

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: `${FIREBASE_PROJECT_ID}.firebaseapp.com`,
  projectId: FIREBASE_PROJECT_ID,
  messagingSenderId: FIREBASE_SENDER_ID,
};
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

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
