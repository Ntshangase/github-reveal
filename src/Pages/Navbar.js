import React from "react";
import "../Styles/Nav.css";
import { NavLink } from "react-router-dom";
import Blueprint from './Blueprint'

function Navbar() {
	return (
		<nav className="navbar">
			<ul>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/">tab2</NavLink>
				</li>
				<li>
					<NavLink to="/Blueprint">tab4</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
