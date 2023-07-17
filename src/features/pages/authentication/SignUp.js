import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const SignUp = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		name: "",
		userName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [error] = useState(true);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post("http://localhost:3000/api/v1/register", {
				user: {
					name: formData.name,
					username: formData.userName,
					email: formData.email,
					password: formData.password,
					password_confirmation: formData.confirmPassword,
				},
			});
			navigate("/home");
		} catch (error) {
			const { message } = error.response.data;
			document.getElementById("show-error").innerHTML = message;
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
				<h1 className="mb-8 text-4xl font-bold text-white">Sign Up</h1>
				<form
					className="w-full max-w-lg p-12 bg-gray-100 border border-gray-300 rounded-lg bg-opacity-10"
					onSubmit={handleFormSubmit}
				>
					<div className="mb-4">
						<label
							htmlFor="name"
							className="block mb-2 font-bold text-white text-md dark:text-white"
						>
							Your Name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primaryGreen focus:border-primaryGreen block w-full p-2.5"
							placeholder="Your name here"
							required
							value={formData.name}
							onChange={handleChange}
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="username"
							className="block mb-2 font-bold text-white text-md dark:text-white"
						>
							Your Username
						</label>
						<input
							type="text"
							id="username"
							name="userName"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primaryGreen focus:border-primaryGreen block w-full p-2.5"
							placeholder="UserName00"
							value={formData.userName}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="email"
							className="block mb-2 font-bold text-white text-md dark:text-white"
						>
							Your Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primaryGreen focus:border-primaryGreen block w-full p-2.5"
							placeholder="name@gmail.com"
							value={formData.email}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="password"
							className="block mb-2 font-bold text-white text-md dark:text-white"
						>
							Your Password
						</label>
						<input
							type="password"
							id="password"
							name="password"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primaryGreen focus:border-primaryGreen block w-full p-2.5"
							placeholder="••••••••"
							value={formData.password}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="confirm-password"
							className="block mb-2 font-bold text-white text-md dark:text-white"
						>
							Confirm Your Password
						</label>
						<input
							type="password"
							id="confirm-password"
							name="confirmPassword"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primaryGreen focus:border-primaryGreen block w-full p-2.5"
							placeholder="••••••••"
							value={formData.confirmPassword}
							onChange={handleChange}
							required
						/>
					</div>
					<button
						type="submit"
						className="text-white bg-primaryGreen hover:bg-primaryGreenDark focus:ring-4 focus:outline-none font-medium rounded-sm text-sm w-full sm:w-auto px-5 py-2.5 text-center"
					>
						Submit
					</button>
					<Link to="/" class="text-primaryGreen font-medium py-2 flex items-center gap-2">
						<FaArrowLeft /> Go Back
					</Link>
				</form>
				{error === true && <p id="show-error" />}
				{error === false && <p>Please enter valid username and password</p>}
			</div>
		</div>
	);
};

export default SignUp;
