import React, {useState} from 'react';
import '@fontsource/roboto';
import 'leaflet/dist/leaflet.css';
import './App.css';

import Stats from './components/StatsComponent.js';
import Header from './components/HeaderComponent.js';
import MapComponent from './components/MapComponent.js';

function App() {
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [ipStats, updateIpStats] = useState(
    {
      ip: "192.212.174",
      location: "Brooklyn, NY 10001",
      timezone: "UTC -05:00",
      isp: "SpaceX Starlink"
    }
  );

  const fetchStats = (ip) => {
    setLoading(true);

    fetch("https://geo.ipify.org/api/v1?apiKey=at_p0qchqpbAVlxMUkOgbHRyaKERKFCe&ipAddress=" + ip)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then( data => {
        updateIpStats(
          {
            ip: data.ip,
            location: `${data.location.city} ${data.location.region}, ${data.location.postalCode}`,
            timezone: data.location.timezone,
            isp: data.isp
          }
        );
      })
      .finally(setLoading(false));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchStats(userInput);
  }

  if (loading) {
    return "Loading..."
  }

  return (
    <div className="App">
      <Header handleSubmit={handleSubmit} setUserInput={setUserInput}/>
      <Stats ipStats={ipStats} />
      <MapComponent/>
    </div>
  );
}

export default App;
