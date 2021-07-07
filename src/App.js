import React, {useState, useEffect} from 'react';
import '@fontsource/roboto';
import './App.css';

import Stats from './components/StatsComponent.js';

function App() {
  const [data, updateData] = useState(null);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  useEffect( () => {
    setLoading(true);

    fetch("https://geo.ipify.org/api/v1?apiKey=at_p0qchqpbAVlxMUkOgbHRyaKERKFCe&ipAddress=8.8.8.8")
      .then(response => {
        if (response.ok) {
          // console.log(response.json());
          return response.json();
        } else {
          throw response;
        }
      })
      .then( data => {
        updateData(data);
      })
      .finally(setLoading(false));

  }, [])

  if (loading) {
    return "Loading..."
  }

  return (
    <div className="App">
      <header>
        <h1>IP Address Tracker</h1>
      </header>
      <Stats data={data} />
    </div>
  );
}

export default App;
