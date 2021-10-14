import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {


	const activeStyle = {
		fontWeight: "bold",
		color: "red"
			}


return (
	<div className="navigation">
		<NavLink to="/home" activeStyle={activeStyle}>Home</NavLink>
		<NavLink to="/friends" activeStyle={activeStyle}>Friends</NavLink>
		<NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
		<NavLink to="/about/culture" activeStyle={activeStyle}>Culture</NavLink>
	</div>
);
};

export default Header;