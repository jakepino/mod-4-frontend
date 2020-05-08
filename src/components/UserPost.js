import React from "react";

export default class UserPost extends React.Component {
	handleDelete = (object) => {
		const deleteMethod = {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				Accepts: "application/json",
			},
		};
		console.log(object);
		if (object.plant_id) {
			fetch(`http://localhost:3000/posts/${object.id}`, deleteMethod);
		} else {
			fetch(`http://localhost:3000/comments/${object.id}`, deleteMethod);
		}
		// fetch(`http://localhost:3000/comments/${id}`, {
		// 	method: "DELETE",
		// })
		// 	.then((response) => response.json())
		// 	.then((data) => console.log(data));
	};
	render() {
		return (
			<div className="card">
				{this.props.pics.map((pic) => (
					<img key={pic.id} src={pic.img} />
				))}
				<div className="cardText">
					<p>
						<strong>{this.props.post.plant.common_name}</strong>
					</p>
					<p>Posted By: {this.props.post.user.username}</p>
					<p>{this.props.post.description}</p>
					<button onClick={() => this.handleDelete(this.props.post)}>
						{" "}
						delete post{" "}
					</button>
				</div>
				<div className="comments">
					<h5>Comments</h5>
					{this.props.postComments.map((comment, index) => (
						<div>
							<p key={comment.id}>{comment.text}</p>
							<button key={index} onClick={() => this.handleDelete(comment)}>
								delete
							</button>
						</div>
					))}
				</div>
			</div>
		);
	}
}
