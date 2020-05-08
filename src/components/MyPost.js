import React, { Component } from "react";
import UserPost from "./UserPost";

export default class MyPost extends Component {
	state = {
		myPost: [],
		myComments: [],
		myPhotos: [],
	};
	componentDidMount() {
		fetch("http://localhost:3000/posts")
			.then((resp) => resp.json())
			.then((posts) => {
				let newData = posts.filter(
					(post) => post.user_id === this.props.currentUser
				);
				this.setState({
					myPost: newData,
				});
			});
		fetch("http://localhost:3000/photos")
			.then((resp) => resp.json())
			.then((photos) => {
				this.setState({
					myPhotos: photos,
				});
			});
		fetch("http://localhost:3000/comments")
			.then((resp) => resp.json())
			.then((comments) => {
				this.setState({
					myComments: comments,
				});
			});
	}
	render() {
		return (
			<div>
				{this.state.myPost.map((post) => {
					let photos = this.state.myPhotos.filter(
						(photo) => photo.post_id === post.id
					);
					let postComments = this.state.myComments.filter(
						(comment) => comment.post_id === post.id
					);
					return (
						<UserPost
							key={post.id}
							post={post}
							pics={photos}
							postComments={postComments}
						/>
					);
				})}
			</div>
		);

		// this.state.myPost.map((post) => {
		// 	let photos = this.state.myPhotos.filter(
		// 		(photo) => photo.post_id === post.id
		// 	);
		// 	let postComments = this.state.myComments.filter(
		// 		(comment) => comment.post_id === post.id
		// 	);

		// 	<UserPost
		// 		key={post.id}
		// 		post={post}
		// 		pics={photos}
		// 		postComments={postComments}
		// 	/>;
		// });
	}
}
