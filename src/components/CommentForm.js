import React, { Component } from "react";

export default class CommentForm extends Component {
	render() {

		return(
			<div className="card">
                
                <input type="text" name="comment" value = {this.props.comment} onChange={this.props.handleChange} />
                <button onClick={this.props.handlePost}>Send Comment</button>

             



                
            </div>
		)
	}
}