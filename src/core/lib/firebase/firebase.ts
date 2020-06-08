import {
  firebaseConfig,
  FIREBASE_VAPID_KEY,
} from '@core/lib/firebase/credentials';
import * as firebase from 'firebase/app';
import 'firebase/messaging';

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
      console.log({ currentToken });
      // TODO: Needs to send the token to somewhere that will send a notification.
    } else {
      console.log(
        'No Instance ID token available. Request permission to generate one.',
      );
    }
  })
  .catch(err => {
    console.log('An error occurred while retrieving token. ', err);
  });
