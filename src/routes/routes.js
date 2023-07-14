import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home, ConcertDetails, AddConcert } from "../pages";

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
			{
				path: "concert/add",
				element: <AddConcert />,
			},
		],
	},
]);

export default router;
