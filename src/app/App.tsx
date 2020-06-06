import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddAdvicePage from './pages/consultant/AddAdvicePage';
import ProblemListsPage from './pages/consultant/ProblemListsPage';
import AdvicePage from './pages/consulting/AdvicePage';
import ConsultingListsPage from './pages/consulting/ConsultingListsPage';
import LifeNavDetailPage from './pages/life-nav/LifeNavDetailPage';
import LifeNavPage from './pages/life-nav/LifeNavPage';
import SignInPage from './pages/signin/SignInPage';

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/life-nav" element={<LifeNavPage />} />
        <Route path="/life-nav-detail" element={<LifeNavDetailPage />} />
        <Route path="/consulting" element={<ConsultingListsPage />} />
        <Route path="/problems" element={<ProblemListsPage />} />
        <Route path="/advice" element={<AdvicePage />} />
        <Route path="/add-advice" element={<AddAdvicePage />} />
        <Route path="*" element={<SignInPage />} />
      </Routes>
    </Router>
  );
};

export default App;
