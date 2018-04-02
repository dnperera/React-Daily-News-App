import React from 'react';

const NewsListItem = ({ news }) => {
	return (
		<div>
			<h4>{news.title}</h4>
			<div>{news.feed}</div>
		</div>
	);
};

export default NewsListItem;
