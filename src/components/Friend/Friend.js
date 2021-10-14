import React from 'react';
import { Link,useHistory } from 'react-router-dom';
import './friend.css';

const Friend = ({friend}) => {
	const {id, name,phone,website,address} = friend;
	const history = useHistory();

const handleFriendClick=()=>{
history.push(`/friend/${id}`)
}

	return (
		<div className="friend">
			<h3>I'm {name}{id}</h3>
			<h5>Call me: {phone}</h5>
			<p>Visit website: {website}</p>
			<p>Visit me: {address.city}</p>

			<Link to={`/friend/${id}`}>Visit me</Link>

			<br />

		<Link to={`/friend/${id}`}>
				<button>Visit me</button>
		</Link>
		<button onClick={handleFriendClick}>Visit Me 2</button>
		</div>
	);
};

export default Friend;