import React, {useState, useEffect} from 'react';
import './App.css';

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
      <p>
        {
          data
          ?
          JSON.stringify(data)
          :
          ""
        }
      </p>
    </div>
  );
}

export default App;
