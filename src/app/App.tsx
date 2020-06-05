import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LifeNavDetailPage from './pages/life-nav/LifeNavDetailPage';
import LifeNavPage from './pages/life-nav/LifeNavPage';
import SignInPage from './pages/signin/SignInPage';

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<SignInPage />} /> */}
        <Route path="/" element={<LifeNavDetailPage />} />
        <Route path="/life-nav" element={<LifeNavPage />} />
        <Route path="/life-nav-detail" element={<LifeNavDetailPage />} />
        <Route path="*" element={<SignInPage />} />
      </Routes>
    </Router>
  );
};

export default App;
