const MRButton = ({ onClick }) => {
	return (
		<button className="card-button" onClick={onClick}>
			<img
				className="button-text"
				src="https://static.miraheze.org/tearsofthemiswiki/thumb/8/82/MR_icon.png/78px-MR_icon.png"
				alt="MR"
			/>
		</button>
	);
};

export default MRButton;
