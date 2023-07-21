// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
	rest.post("http://localhost:4000/api/v1/login", (req, res, ctx) => {
		// Persist user's authentication in the session
		return res(
			// Respond with a 200 status code
			ctx.status(200),
			ctx.json({
				authentication_token: "123456fdgdgdf",
				user_id: 1,
				name: "John Doe",
				email: "john@mail.com",
				role: "user",
				username: "john",
			})
		);
	}),

	rest.post("http://localhost:4000/api/v1/register", (req, res, ctx) => {
		return res(
			// Respond with a 200 status code
			ctx.status(200),
			ctx.json({
				authentication_token: "123456fdgdgdf",
				user_id: 1,
				name: "John Doe",
				email: "john@mail.com",
				role: "user",
				username: "john",
			})
		);
	}),

	//   rest.get('/user', (req, res, ctx) => {
	//     // Check if the user is authenticated in this session
	//     const isAuthenticated = sessionStorage.getItem('is-authenticated')

	//     if (!isAuthenticated) {
	//       // If not authenticated, respond with a 403 error
	//       return res(
	//         ctx.status(403),
	//         ctx.json({
	//           errorMessage: 'Not authorized',
	//         }),
	//       )
	//     }

	//     // If authenticated, return a mocked user details
	//     return res(
	//       ctx.status(200),
	//       ctx.json({
	//         username: 'admin',
	//       }),
	//     )
	//   }),
];
