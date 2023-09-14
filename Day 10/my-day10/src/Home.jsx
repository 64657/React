import React from 'react';
import axios from 'axios';
export default class MyList extends React.Component {
	state = {
		blogs: []
	}
	componentDidMount() {
		axios.get(`https://jsonplaceholder.typicode.com/posts`)
			.then(response => {
				const posts = response.data;
				this.setState({ posts });
			})
	}
	render() {
		return (
			<ul>
				{this.state.posts.map(post => { post.title })}
				</ul>
)}
}
