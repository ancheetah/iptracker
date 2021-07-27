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
  const [error, setError] = useState(null);
  const [ipStats, updateIpStats] = useState(
    {
      ip: "192.212.174",
      location: "Brooklyn, NY 10001",
      timezone: "UTC -05:00",
      isp: "SpaceX Starlink"
    }
  );

  const fetchStats = (search) => {
    setLoading(true);
    setError(false);

    fetch("https://geo.ipify.org/api/v1?apiKey=at_p0qchqpbAVlxMUkOgbHRyaKERKFCe&" + search)
      .then(response => {
        // console.log(response);
        if (response.ok) {
          return response.json();
        } else {
          console.log(`Status code ${response.status}. Error: ${response.statusText}`);
          throw Error(response.statusText);
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
      .catch( error => setError(error))
      .finally(setLoading(false));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if input is ip address or domain
    const ipRegex = /^\d.*\d$/;
    const searchType = ipRegex.test(userInput) ? 'ipAddress' : 'domain';
    
    fetchStats(searchType + '=' + userInput);
  }

  return (
    <div className="App">
      <Header handleSubmit={handleSubmit} setUserInput={setUserInput}/>
      {
        loading ? <p>Fetching data...</p> :
        error ? <p>Error retrieving data.</p>
        : <Stats ipStats={ipStats} />
      }
      <MapComponent/>
    </div>
  );
}

export default App;
