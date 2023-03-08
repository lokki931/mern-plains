import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import NotFoundPage from './pages/not-found-page/NotFoundPage';
import PlanePage from './pages/plane-page/PlanePage';
import CreatePlanePage from './pages/create-plane-page/CreatePlanePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-plane" element={<CreatePlanePage />} />
        <Route path="/plane/:id" element={<PlanePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
