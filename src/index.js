import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import NewsHeadlines from './db.json';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
