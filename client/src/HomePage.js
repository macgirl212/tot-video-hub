import Navbar from './Navbar.js';
import CharactersPage from './CharactersPage.js'

function HomePage() {
  return (
    <>
      <Navbar header={'Video Hub'} />
      <CharactersPage />
    </>
  );
}

export default HomePage;