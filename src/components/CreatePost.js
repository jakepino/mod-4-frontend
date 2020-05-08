import React from "react";

export default class CreatePost extends React.Component {
	state = {
		plantCommon: "",
		plantLatin: "",

		// userId: this.props.userId,
		plantId: null,
		description: "",

		image: "",
		postId: null,
	};
	// first thing we need is a plant, post request for plant
	// then create post, with fetch request using user id and plant id, and description
	// then plug in image into post

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();

		fetch("http://localhost:3000/plants", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accepts: "application/json",
			},
			body: JSON.stringify({
				common_name: this.state.plantCommon,
				latin_name: this.state.plantLatin,
			}),
		})
			.then((response) => response.json())
			.then((plant) => {
				fetch("http://localhost:3000/posts", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Accepts: "application/json",
					},
					body: JSON.stringify({
						description: this.state.description,
						user_id: this.props.userId,
						plant_id: plant.id,
					}),
				})
					.then((response) => response.json())
					.then((newPost) => {
						fetch("http://localhost:3000/photos", {
							method: "POST",
							headers: {
								"Content-Type": "application/json",
								Accepts: "application/json",
							},
							body: JSON.stringify({
								post_id: newPost.id,
								img: this.state.image,
							}),
						})
							.then((response) => response.json())
							.then((postPhoto) => {
								console.log(postPhoto);
							});
					});
			});
	};
	render() {
		return (
			<div className="card">
				<form>
					<input
						type="text"
						name="plantCommon"
						placeholder="Plant Common Name"
						value={this.state.plantCommon}
						onChange={this.handleChange}
					/>
					<input
						type="text"
						name="plantLatin"
						placeholder="Plant Latin Name"
						value={this.state.plantLatin}
						onChange={this.handleChange}
					/>
					<input
						type="text"
						name="description"
						placeholder="Add Description"
						value={this.state.description}
						onChange={this.handleChange}
					/>
					<input
						type="text"
						name="image"
						placeholder="Image goes here"
						value={this.state.image}
						onChange={this.handleChange}
					/>
					<button onClick={this.handleSubmit}> Submit New Post </button>
				</form>
			</div>
		);
	}
}
