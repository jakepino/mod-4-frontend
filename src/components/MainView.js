
import React, { Component } from "react";
import AllPost from './AllPost'
import Header from './Header'


export default class MainView extends Component {
    state = {
        posts : [],
        photos: [],
        comments:[]
    }

    addComment = (comment) =>{
      this.setState({
        comments: [...this.state.comments, comment]
      })
    }
    
    componentDidMount(){
		fetch('http://localhost:3000/posts')
		.then(resp => resp.json())
		.then(data => {
			this.setState({
				posts: data
			})
    })


     fetch('http://localhost:3000/photos')
		.then(resp => resp.json())
		.then(data => {
			this.setState({
				photos: data
			})
    })

    fetch('http://localhost:3000/comments')
		.then(resp => resp.json())
		.then(data => {
			this.setState({
				comments: data
			},()=> console.log(this.state.comments))
    })
    

    }



    
    
    render() {
		return(
            <div >
                 <Header />
                 <AllPost
                  comments={this.state.comments} 
                 posts = {this.state.posts}
                  photos={this.state.photos} 
                  addComment={this.addComment}
                  />
            </div>

        )
	}
}