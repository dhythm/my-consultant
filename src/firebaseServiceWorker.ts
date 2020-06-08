// import '@firebase/messaging';
// import * as firebase from 'firebase/app';

// const FIREBASE_API_KEY = '';
// const FIREBASE_PROJECT_ID = '';
// const FIREBASE_VAPID_KEY = '';
// const FIREBASE_SENDER_ID = '';

// const firebaseConfig = {
//   apiKey: FIREBASE_API_KEY,
//   authDomain: `${FIREBASE_PROJECT_ID}.firebaseapp.com`,
//   projectId: FIREBASE_PROJECT_ID,
//   messagingSenderId: FIREBASE_SENDER_ID,
// };
// firebase.initializeApp(firebaseConfig);
// const messaging = firebase.messaging();
// messaging.usePublicVapidKey(FIREBASE_VAPID_KEY);

// export function initialButton() {
//   messaging
//     .getToken()
//     .then(token => {
//       if (token) {
//         console.log({ token });
//       } else {
//         console.log('No token');
//       }
//     })
//     .catch(function (err) {
//       console.log('An error occurred while retrieving token. ', err);
//     });
// }

// export function getSubscription() {
//   messaging
//     .getToken()
//     .then(token => {
//       if (!token) {
//         getNotification();
//       } else {
//         displayToken();
//       }
//     })
//     .catch(function (err) {
//       console.log('An error occurred while retrieving token. ', err);
//     });
// }

// export function getNotification() {
//   messaging
//     .requestPermission()
//     .then(function () {
//       console.log('Notification permission granted.');
//       displayToken();
//       initialButton();
//     })
//     .catch(function (err) {
//       console.log('Unable to get permission to notify.', err);
//     });
// }

// export function displayToken() {
//   messaging
//     .getToken()
//     .then(token => {
//       if (token) {
//         console.log(token);
//       } else {
//         console.log(
//           'No Instance ID token available. Request permission to generate one.',
//         );
//       }
//     })
//     .catch(function (err) {
//       console.log('An error occurred while retrieving token. ', err);
//     });
// }

export function register() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('/firebase-messaging-sw.js').then(
        function (registration) {
          console.log({ registration });
          console.log(
            'firebase-messaging-sw.js registration successful with scope: ',
            registration.scope,
          );
        },
        function (err) {
          console.log('firebase-messaging-sw.js registration failed: ', err);
        },
      );
    });
  }
}
