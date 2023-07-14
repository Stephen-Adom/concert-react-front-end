import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages";
import SignIn  from "../features/pages/authentication/SignIn";

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
	{
		path: "/signin",
		element: <App />,
		children: [
			{
				index: true,
				element: <SignIn />,
			},
		],
	},
]);

export default router;
