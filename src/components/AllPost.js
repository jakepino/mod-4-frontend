import React, { Component } from "react";
import Post from './Post'

export default class AllPost extends Component {

    
    
    render() {

		return (
            <div>
                {
                    this.props.posts.map((p) => {
                        let pics = this.props.photos.filter(pic => pic.post_id === p.id)
                        let postComments = this.props.comments.filter(c => c.post_id === p.id)
                       return  <Post key = {p.id} post={p} pics = {pics} postComments={postComments} addComment={this.props.addComment} />
                       
                 })
                }
            </div>
             
            
            
		)
	}
}