import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./features";

function App() {
	return (
		<div className="App">
			<Sidebar></Sidebar>
			<main className="ml-0 md:ml-56">
				<Outlet></Outlet>
			</main>
		</div>
	);
}

export default App;
