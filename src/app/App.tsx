import { firebaseConfig, FIREBASE_VAPID_KEY } from '@core/lib/firebase';
import * as firebase from 'firebase/app';
import 'firebase/messaging';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddAdvicePage from './pages/consultant/AddAdvicePage';
import AddClientPage from './pages/consultant/AddClientPage';
import ProblemListsPage from './pages/consultant/ProblemListsPage';
import AdvicePage from './pages/consulting/AdvicePage';
import ConsultingListsPage from './pages/consulting/ConsultingListsPage';
import LifeNavDetailPage from './pages/life-nav/LifeNavDetailPage';
import LifeNavPage from './pages/life-nav/LifeNavPage';
import SignInPage from './pages/signin/SignInPage';

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
    } else {
      console.log(
        'No Instance ID token available. Request permission to generate one.',
      );
    }
  })
  .catch(err => {
    console.log('An error occurred while retrieving token. ', err);
  });

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/life-nav" element={<LifeNavPage />} />
        <Route path="/life-nav-detail/:id" element={<LifeNavDetailPage />} />
        <Route path="/consulting" element={<ConsultingListsPage />} />
        <Route path="/problems" element={<ProblemListsPage />} />
        <Route path="/advice" element={<AdvicePage />} />
        <Route path="/add-advice" element={<AddAdvicePage />} />
        <Route path="/add-client" element={<AddClientPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="*" element={<LifeNavPage />} />
      </Routes>
    </Router>
  );
};

export default App;
