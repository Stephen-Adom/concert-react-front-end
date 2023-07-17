import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import axios from "axios";

const SignIn = () => {
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post("http://localhost:3000/api/v1/login", {
				username,
				password,
			});
			navigate("/home");
		} catch (error) {
			const { message } = error.response.data;
			setErrorMessage(message);
		}
	};

	return (
		<div
			className="bg-center bg-no-repeat bg-cover"
			style={{
				backgroundImage:
					"url(https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cm9jayUyMGNvbmNlcnR8ZW58MHx8MHx8fDA%3D&w=1000&q=80)",
			}}
		>
			<div className="flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-60">
				<h1 className="mb-8 text-4xl font-bold text-white">Sign In</h1>
				<form
					className="w-full max-w-lg p-12 bg-gray-100 border border-gray-300 rounded-lg bg-opacity-10"
					onSubmit={handleFormSubmit}
				>
					<div className="mb-4">
						<label
							htmlFor="username"
							className="block mb-2 font-bold text-white text-md dark:text-white"
						>
							Your username
						</label>
						<input
							type="text"
							id="username"
							name="username"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primaryGreen focus:border-primaryGreen block w-full p-2.5"
							placeholder="UserName00"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							required
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="password"
							className="block mb-2 font-bold text-white text-md dark:text-white"
						>
							Your password
						</label>
						<input
							type="password"
							id="password"
							name="password"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primaryGreen focus:border-primaryGreen block w-full p-2.5"
							placeholder="••••••••"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>
					<button
						type="submit"
						className="text-white bg-primaryGreen hover:bg-primaryGreenDark focus:ring-4 focus:outline-none font-medium rounded-sm text-sm w-full sm:w-auto px-5 py-2.5 text-center"
					>
						Submit
					</button>
					<br />
					<Link to="/" className="flex items-center gap-2 py-2 font-medium text-primaryGreen">
						<FaArrowLeft /> Go Back
					</Link>
					{errorMessage && <p className="text-white">{errorMessage}</p>}
				</form>
			</div>
		</div>
	);
};

export default SignIn;
