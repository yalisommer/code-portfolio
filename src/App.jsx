import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import SharkTracker from './Pages/SharkTracker';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="home">
        <Routes>
          <Route path="/" element={
            <>
              <h1>Yali Sommer</h1>
              <section className="home-section">
                <h2>About Me</h2>
                <p>
                  Current Sophomore at Brown University studying mathematics & computer science. Interested in backend development, LLM integration, data science, computer vision, and designing/implementing the occasional pretty website (including this one).
                </p>
              </section>
              <section className="home-section">
                <h2>Projects</h2>
                <p>
                  Shark Tracker - Display of tracking data for Great White Sharks of the coast of Guadalupe Island
                </p>
              </section>
              <section className="home-section">
                <h2>Contact Me</h2>
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
