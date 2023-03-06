import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import PlanePage from './pages/plane-page/PlanePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plane/:id" element={<PlanePage />} />
      </Routes>
    </Router>
  );
}

export default App;
