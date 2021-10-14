import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const FriendDetail = () => {

	const params= useParams();
	const {friendId} = params
	console.log(params)
	const [friend, setFriend] = useState({});
	const history = useHistory();
	useEffect(() => {
		const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
		fetch(url)
			.then(res => res.json())
			.then(data => setFriend(data))
	}, [])

	const handleBackToFriends = () => {
		history.push("/friends");
	}

	return (
		<div>
			<h5>Detail of {friendId}</h5>
			<h1>{friend.name}</h1>
			<h4>{friend.phone}</h4>
			<h5>{friend.website}</h5>
			<p>Works at :{friend.company?.name}</p>
			<button onClick={handleBackToFriends}>See All Friends</button>
		</div>
	);
};

export default FriendDetail;