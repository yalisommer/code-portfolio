import React, { useEffect } from 'react';
import './SharkTracker.css';

function SharkTracker() {
  useEffect(() => {
    // Add the class to the body element
    document.body.classList.add('shark-tracker-bg');

    // Remove the class when the component is unmounted
    return () => {
      document.body.classList.remove('shark-tracker-bg');
    };
  }, []);

  return (
    <div className="shark-tracker">
      <h1>Shark Tracker</h1>
      <p>Welcome to Yali's Great White Shark Tracker Display. Shark Data provided by the SEANOE White Shark database. Sharks captured off the coast of Guadalupe Island.</p>
      <div id="map" style={{ width: '100%', height: '600px', marginBottom: '2rem', backgroundColor: '#f0f0f0' }}></div>
    </div>
  );
}

export default SharkTracker;