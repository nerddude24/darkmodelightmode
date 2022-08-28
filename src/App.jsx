import React, { useState } from "react";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default function App() {
	const [darkMode, setDarkMode] = useState(true);
	const dark = {
		bg: "#282d35",
		fg: "#22222d",
		txt: "white",
		ftr: "wheat",
	};

	const white = {
		bg: "white",
		fg: "whitesmoke",
		txt: "black",
		ftr: "grey",
	};

	function handleToggleMode(event) {
		setDarkMode((prev) => {
			document.documentElement.style.setProperty("--bg", !prev ? dark.bg : white.bg);
			document.documentElement.style.setProperty("--fg", !prev ? dark.fg : white.fg);
			document.documentElement.style.setProperty("--txt", !prev ? dark.txt : white.txt);
			document.documentElement.style.setProperty("--ftr", !prev ? dark.ftr : white.ftr);
			return !prev;
		});
	}

	return (
		<div>
			<Nav handleToggleMode={handleToggleMode} mode={darkMode}></Nav>
			<Main></Main>
			<Footer></Footer>
		</div>
	);
}
