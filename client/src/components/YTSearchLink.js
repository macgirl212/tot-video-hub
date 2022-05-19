const ytSearchLink = (title) => {
	// replaces all spaces with '+' for hyperlink
	const search = `https://www.youtube.com/results?search_query=Tears+of+Themis+${title.replace(
		/\s/g,
		'+'
	)}`;
	return search;
};

export default ytSearchLink;
