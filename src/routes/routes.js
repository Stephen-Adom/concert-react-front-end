import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home, ConcertDetails, AddConcert, ManageConcert } from "../pages";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "home",
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
			{
				path: "concert/update",
				element: <ManageConcert />,
			},
		],
	},
]);

export default router;
