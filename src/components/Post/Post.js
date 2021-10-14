import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Post = (props) => {

	const { id, title } = props.post;
	const history = useHistory()

	// console.log(props)

	const handleSeeMore = () => {
		history.push(`/post/${id}`);
	}
	return (
		<div>
			<h2>{title}</h2>
			<Link to={`/post/${id}`}>Post Detail</Link>
<br />
			<button onClick={handleSeeMore}>See More</button>

		</div>
	);
};

export default Post;