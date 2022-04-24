import Navbar from './Navbar.js';
import CharactersPage from './CharactersPage.js'
import React, { useState } from 'react';

function HomePage() {
  const [header, setHeader] = useState('Video Hub')
  return (
    <div className="App">
      <Navbar header={header} />
      <CharactersPage setHeader={setHeader} />
    </div>
  );
}

export default HomePage;