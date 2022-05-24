const VideoContainer = ({ videoSrc }) => {
	return (
		<div className="video-container">
			<iframe
				className="screen"
				src={`${videoSrc}`}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			></iframe>
		</div>
	);
};

export default VideoContainer;
