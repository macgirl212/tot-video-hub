import './stylesheets/navbar.scss';
import { useSelector } from 'react-redux';

function Navbar() {
	const title = useSelector((state) => state.navbar.title);
	return (
		<div className="navbar">
			<img
				src="https://webstatic-sea.mihoyo.com/upload/event/2021/03/18/c9926c785bdd51cc7d03b1beb5f1adae_2460472424931671693.png"
				id="logo"
				alt="Tears of Themis"
			/>
			<h1 id="title">{title}</h1>
		</div>
	);
}

export default Navbar;
