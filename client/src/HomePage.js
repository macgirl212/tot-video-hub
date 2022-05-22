import Navbar from './Navbar.js';
import CharactersPage from './CharactersPage.js';
import store from './store/store';

function HomePage() {
	console.log('Initial state: ', store.getState());
	return (
		<>
			<Navbar header={'Video Hub'} />
			<CharactersPage />
		</>
	);
}

export default HomePage;
