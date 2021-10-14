import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
import './friends.css';

const Friends = () => {

	const [friends,setFriends] = useState([]);
	console.log(friends)

	useEffect(()=>{
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(res=>res.json())
		.then(data=>setFriends(data))
	},[])


	return (
		<div>
			<h2>I have {friends.length} Friends</h2>
		<div className="friends-container">
				{
					friends.map(friend => <Friend
						key={friend.id}
						friend={friend}
					></Friend>)
				}
		</div>
		</div>
	);
};

export default Friends;