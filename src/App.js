import React, {useEffect, useState} from 'react';
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
  const [userIp, setUserIp] = useState('');
  const [ipStats, updateIpStats] = useState(
    {
      ip: "",
      location: "",
      coordinates: [40.650002,-73.993286],
      timezone: "",
      isp: ""
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
        // console.log(data);
        updateIpStats(
          {
            ip: data.ip,
            location: `${data.location.city} ${data.location.region}, ${data.location.postalCode}`,
            coordinates: [data.location.lat, data.location.lng],
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

  useEffect( () => {

    fetch("https://api.ipify.org?format=json")
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        console.log(`Status code ${response.status}. Error: ${response.statusText}`);
        throw Error(response.statusText);
      }
    })
    .then( data => {
      setUserIp(data.ip);
    });

    // if (userIp) {
      // console.log('userIp =', userIp)
      fetchStats('ipAddress=' + userIp);
    // }
  }, [])

  return (
    <div className="App">
      <Header handleSubmit={handleSubmit} setUserInput={setUserInput}/>
      {
        loading ? <p>Fetching data...</p> :
        error ? <p>Error retrieving data.</p>
        : <Stats ipStats={ipStats} />
      }
      <MapComponent coordinates={ipStats.coordinates}/>
    </div>
  );
}

export default App;
