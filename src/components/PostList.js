import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            posts: [],
            error: null
        }
    }
    
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts1').then(
            response => {
                console.log(response)
                this.setState({
                    posts: response.data
                })
            }
        )
        .catch(
            error =>{
                console.log(error)
                this.setState({
                    error: "Error retreiving data"
                })
            }
        )
    }

    render() {
        const {posts, error} = this.state
        return (
            <div>
                List of post
                {
                    posts.length ?
                    posts.map(post => <div key={post.id}>{post.title}</div>) :
                    null

                }
                {
                    error ? <div>{error}</div> : null
                }
            </div>
        )
    }
}

export default PostList
