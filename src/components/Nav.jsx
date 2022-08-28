import React from "react";
import logo from "../img/react-logo.png";

export default function Nav(props) {
	const { handleToggleMode, mode } = props;

	return (
		<nav className="nav">
			<img src={logo} alt="" width="90px" className="logo" />
			<h3 className="main-title">ReactFacts</h3>
			<div className="mode">
				<p>Light</p>
				<label className="switch">
					<input type="checkbox" onChange={handleToggleMode} checked={mode} />
					<span className="slider rounds"></span>
				</label>
				<p>Dark</p>
			</div>
		</nav>
	);
}
