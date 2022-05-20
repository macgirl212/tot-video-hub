const RButton = ({ onClick }) => {
	return (
		<button className="card-button" onClick={onClick}>
			<img
				className="button-text"
				src="https://static.miraheze.org/tearsofthemiswiki/thumb/b/bf/R_icon.png/43px-R_icon.png"
				alt="R"
			/>
		</button>
	);
};

export default RButton;
