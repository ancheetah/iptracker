import React, {useState, useEffect} from 'react';
import '@fontsource/roboto';
import './App.css';

import Stats from './components/StatsComponent.js';
import Header from './components/HeaderComponent.js';

function App() {
  // const [data, updateData] = useState(null);
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
        // updateData(data);
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

  }, [])

  if (loading) {
    return "Loading..."
  }

  return (
    <div className="App">
      <Header/>
      {/* <p>{JSON.stringify(data)}</p> */}
      <Stats ipStats={ipStats} />
    </div>
  );
}

export default App;
