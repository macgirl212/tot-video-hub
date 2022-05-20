const SSRButton = ({ onClick }) => {
	return (
		<button className="card-button" onClick={onClick}>
			<img
				className="button-text"
				src="https://static.miraheze.org/tearsofthemiswiki/thumb/c/c9/SSR_icon.png/92px-SSR_icon.png"
				alt="SSR"
			/>
		</button>
	);
};

export default SSRButton;
