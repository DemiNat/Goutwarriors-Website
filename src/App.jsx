import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import UnderstandingGout from './components/UnderstandingGout';
import DietNutrition from './components/DietNutrition';
import LivingWithGout from './components/LivingWithGout';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background font-body">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/understanding-gout" element={<UnderstandingGout />} />
            <Route path="/diet-nutrition" element={<DietNutrition />} />
            <Route path="/living-with-gout" element={<LivingWithGout />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

