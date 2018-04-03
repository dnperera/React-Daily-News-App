import React from 'react';
import NewsListItem from './news_list_item';

const NewsList = props => {
	return (
		<div>
			{props.children}
			{props.NewsHeadlines.map(newsItem => {
				return <NewsListItem key={newsItem.publishedAt} news={newsItem} />;
			})}
		</div>
	);
};
export default NewsList;
