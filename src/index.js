import React from "react";
import ReactDOM from "react-dom/client";
import "flowbite/dist/flowbite.css";
import "flowbite/dist/flowbite.js";
import "./index.css";
import "swiper/css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
