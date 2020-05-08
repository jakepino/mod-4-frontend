import React from "react";
import "./App.css";
import MainView from "./components/MainView";
import Header from "./components/Header";
import Login from "./components/Login";
import MyPost from "./components/MyPost";
import CreatePost from "./components/CreatePost";

class App extends React.Component {
	state = {
		view: "",
		currentUser: 12,
	};

	handleView = (newState) => {
		this.setState({
			view: newState,
		});
	};

	handleUser = (arg) => {
		fetch("http://localhost:3000/users")
			.then((resp) => resp.json())
			.then((data) => {
				data.forEach((user) => {
					if (user.username === arg) {
						this.setState({
							currentUser: user.id,
						});
					}
				});
			});
	};

	render() {
		return (
			<div className="App">
				<Header />
				<div>
					<ul>
						<li onClick={() => this.handleView("home")}>Home</li>
						<li onClick={() => this.handleView("mypost")}>My Post</li>
						<li onClick={() => this.handleView("create")}>Create a Post</li>
						<li onClick={() => this.handleView("login")}>Login</li>
					</ul>
				</div>
				{this.state.view === "home" && <MainView />}
				{this.state.view === "mypost" && !!this.state.currentUser ? (
					<MyPost currentUser={this.state.currentUser} />
				) : null}
				<div id="create-container">
					{this.state.view === "create" && !!this.state.currentUser ? (
						<CreatePost userId={this.state.currentUser} />
					) : null}{" "}
				</div>
				<div id="login">
					{this.state.view === "login" && (
						<Login handleUser={this.handleUser} />
					)}
				</div>
			</div>
		);
	}
}
export default App;
