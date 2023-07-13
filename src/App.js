import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./features";

function App() {
	return (
		<div className="App">
			<Sidebar></Sidebar>
			<Outlet></Outlet>
		</div>
	);
}

export default App;
