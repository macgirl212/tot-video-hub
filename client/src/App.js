import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';
import ArtemPage from './artem-pages/ArtemPage';
import LukePage from './luke-pages/LukePage';
import MariusPage from './marius-pages/MariusPage';
import VynPage from './vyn-pages/VynPage';

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="*" element={<HomePage />} />
				<Route path="/artem" element={<ArtemPage />} />
				<Route path="/luke" element={<LukePage />} />
				<Route path="/marius" element={<MariusPage />} />
				<Route path="/vyn" element={<VynPage />} />
			</Routes>
		</>
	);
}

export default App;
