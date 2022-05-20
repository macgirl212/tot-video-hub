const AltLinkButton = ({ onClick }) => {
	return (
		<>
			<p className="link" onClick={onClick}>
				Broken link? Find alternate videos here.
			</p>
		</>
	);
};

export default AltLinkButton;
