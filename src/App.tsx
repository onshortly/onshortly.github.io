
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main';
import NavigationMenu from './components/NavigationMenu';
import { useState, useEffect } from 'react';
import achievementsData from './data/AchievementData';
import { AchievementProvider } from './context/AchievementContext';
import Achievement from './components/Achievement';
import Header from './components/Header';
import { ParallaxHeader } from './components/ParallaxHeader';

function App() {
    
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AchievementProvider>
     <Routes>
            <Route path="/" Component={Main} />
            <Route path="/about" element={<p>about me</p>} />
            </Routes>
            <div style={{ position: 'fixed', bottom: 20, right: 20 }}>
                    <Achievement />
                </div>
            </AchievementProvider>
    </BrowserRouter>
  );
}

export default App;
