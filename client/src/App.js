import Navbar from './Navbar.js';
import Home from './Home.js'
import React, { useState } from 'react';

function App() {
  const [header, setHeader] = useState('Video Hub')
  return (
    <div className="App">
      <Navbar header={header} />
      <Home setHeader={setHeader} />
    </div>
  );
}

export default App;