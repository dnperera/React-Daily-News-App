import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import NewsList from './components/news_list';
import NewsHeadlines from './db.json';

class App extends Component {
	state = {
		newsHeadlines: NewsHeadlines,
	};
	render() {
		return (
			<div>
				<Header />
				<NewsList NewsHeadlines={this.state.newsHeadlines} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
