import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Header from './components/header';
import NewsList from './components/news_list';

class App extends Component {
	state = {
		newsHeadlines: [],
	};

	componentDidMount() {
		var url =
			'https://newsapi.org/v2/top-headlines?' +
			'sources=bbc-news,cnn&' +
			'country:us&' +
			'apiKey=905d2a2a7c074876a598da99343f7167';
		var request = axios.get(url);
		request.then(response => {
			this.setState({
				newsHeadlines: response.data.articles,
			});
			console.log(response.data.articles);
		});
	}
	render() {
		if (this.state.newsHeadlines.length === 0) {
			return <div>News headlines are loading ...</div>;
		}
		return (
			<div>
				<Header />
				<NewsList NewsHeadlines={this.state.newsHeadlines}>
					<h3>List of news articles..</h3>
				</NewsList>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
