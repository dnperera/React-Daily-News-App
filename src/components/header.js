import React, { Component } from 'react';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: '',
		};
	}

	inputChangeHandler = event => {
		this.setState({
			term: event.target.value,
		});
	};
	render() {
		return (
			<header>
				<div className="logo">Logo</div>
				<input type="text" onChange={this.inputChangeHandler} />
			</header>
		);
	}
}

export default Header;
