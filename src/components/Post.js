import React, { Component } from "react";
import CommentForm from './CommentForm'

export default class Post extends Component {

    state = {
        comment:''
    }

    handleChange = (e) =>{
        this.setState({
           comment: e.target.value 
        })
    }
    handlePost = (e) =>{
        let newComment = {
            post_id: this.props.post.id,
            text: this.state.comment
        }
        let reqObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newComment)
        }
        
        
        fetch('http://localhost:3000/comments', reqObj)
        .then(resp => resp.json())
        .then((data)=>{
            this.props.addComment(data)
            this.setState({
                comment:''
            })
        })
    
    }


	render() {

		return(
			<div className="card">
                {
                    this.props.pics.map(pic => (
                        <img key = {pic.id} src = {pic.img} />
                    ))
                }
                <div className="cardText">   

                    <p><strong>{this.props.post.plant.common_name}</strong></p>
                    <p>Posted By: {this.props.post.user.username}</p>
                    <p>{this.props.post.description}</p>
                

                </div>
                <div className="comments">
                    <h5>Comments</h5>
                    {
                          this.props.postComments.map(c => (
                          <p key={c.id}>{c.text}</p>
                         ))

                    }

                </div>


                <CommentForm handlePost={this.handlePost} handleChange={this.handleChange} comment={this.state.comment}/>




                
            </div>
		)
	}
}