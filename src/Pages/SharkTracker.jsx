import React, { useEffect, useState } from 'react';
import './SharkTracker.css';
import MapView from '../components/MapView';
import LoadingSpinner from '../components/LoadingSpinner'; // Import the LoadingSpinner component

function SharkTracker() {
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null); // State to manage error status

  useEffect(() => {
    // Simulate data loading
    const loadData = async () => {
      try {
        // Simulate a delay for loading data
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setLoading(false); // Set loading to false once data is loaded
      } catch (err) {
        setError('Failed to load data'); // Set error message if loading fails
        setLoading(false);
      }
    };

    loadData();

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
      <p>Welcome to Yali's Great White Shark Tracker Display. Shark Data provided by the SEANOE White Shark database, cleaned and visualized by yours truly. Sharks captured off the coast of Guadalupe Island.</p>
      {loading || error ? <LoadingSpinner /> : <MapView />} {/* Conditionally render LoadingSpinner or MapView */}
      {error && <p className="error">{error}</p>} {/* Display error message if there is an error */}
    </div>
  );
}

export default SharkTracker;