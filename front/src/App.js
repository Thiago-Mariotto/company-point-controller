/* eslint-disable no-restricted-globals */
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {  
  const [lat, setLat] = useState('');
  const [log, setLog] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  console.log('TESTE');
  const handleLocation = async (e) => {
    e.preventDefault();
    if (screen.width < 640 || screen.height < 480) setIsMobile(true);
    
    const { data } = await axios.post(`${process.env.REACT_APP_GOOGLE_API}?key=${process.env.REACT_APP_GOOGLE_KEY}`);
    
    axios.post(`${process.env.REACT_APP_API_URL}/location`, { isMobile, device: data });

    setLat(`lati: ${data.location.lat}`)
    setLog(`long: ${data.location.lng}`)
    
  }

  useEffect(() => {
    
  });

  return (
    <div className="App">
      <header className="App-header">
       <button onClick={ handleLocation }>Get your Location</button>
        <p>
          {lat && log ? `${lat} ${log}` : 'Click the button to get your location'}
        </p>
      </header>
    </div>
  );
}

export default App;
