import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: <Home />,
			},
		],
	},
]);

export default router;
