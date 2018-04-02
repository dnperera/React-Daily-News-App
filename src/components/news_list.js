import React from 'react';
import NewsListItem from './news_list_item';

const NewsList = ({ NewsHeadlines }) => {
	console.log(NewsHeadlines);
	return (
		<div>
			{NewsHeadlines.map(newsItem => {
				return <NewsListItem key={newsItem.id} news={newsItem} />;
			})}
		</div>
	);
};
export default NewsList;
