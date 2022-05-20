const SRButton = ({ onClick }) => {
	return (
		<button className="card-button" onClick={onClick}>
			<img
				className="button-text"
				src="https://static.miraheze.org/tearsofthemiswiki/thumb/f/f7/SR_icon.png/76px-SR_icon.png"
				alt="SR"
			/>
		</button>
	);
};

export default SRButton;
