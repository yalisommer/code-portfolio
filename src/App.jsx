import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import { Routes, Route, useLocation } from 'react-router-dom';
import SharkTracker from './Pages/SharkTracker';

function App() {
  const location = useLocation();
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey(prevKey => prevKey + 1);
  }, [location.pathname]);

  return (
    <div className="app">
      <Sidebar />
      <div className="home">
        {location.pathname === '/' && (
          <div key={key} className="shooting-stars-container">
            <div className="shooting-star" />
            <div className="shooting-star" />
            <div className="shooting-star" />
          </div>
        )}
        <Routes>
          <Route path="/" element={
            <>
              <h1>YALI SOMMER</h1>
              <section className="home-section">
                <h2>ABOUT ME</h2>
                <p>
                  Current Sophomore at Brown University studying mathematics & computer science. Interested in backend development, LLM integration, data science, computer vision, and designing/implementing the occasional pretty website (including this one).
                </p>
              </section>
              <section className="home-section">
                <h2>PROJECTS</h2>
                <p>
                  Shark Tracker - Display of tracking data for Great White Sharks of the coast of Guadalupe Island
                </p>
              </section>
              <section className="home-section">
                <h2>CONTACT ME</h2>
                <p>
                  <u>Email:</u> yalisommer@gmail.com <br></br>
                  <u>LinkedIn</u>: <a href="https://www.linkedin.com/in/yalisommer/" target="_blank">www.linkedin.com/in/yalisommer</a>
                </p>
              </section>
            </>
          } />
          <Route path="/shark-tracker" element={<SharkTracker />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
