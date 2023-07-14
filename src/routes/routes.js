import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home, ConcertDetails } from "../pages";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "concerts",
				element: <Home />,
			},
			{
				path: "concerts/:id",
				element: <ConcertDetails />,
			},
		],
	},
]);

export default router;
