import React, { Component } from "react";
export default class Login extends Component {
	state = {
		username: "",
	};
	changeState = (e) => {
		this.setState({
			username: e.target.value,
		});
	};
	render() {
		return (
			<div className="card">
				<h1>Login Here</h1>
				<h4>Enter Username</h4>
				<input
					type="text"
					name="username"
					value={this.state.username}
					onChange={this.changeState}
				/>
				<button onClick={() => this.props.handleUser(this.state.username)}>
					Login
				</button>
			</div>
		);
	}
}
