import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "../../../components";
import {
	setErrors,
	toggleLoading,
	setAuthToken,
	setCurrentUser,
	authSelector,
} from "../../storeSlice/authSlice";
import { loginUser } from "../../../services/services";
import { useDispatch, useSelector } from "react-redux";
import localforage from "localforage";

const SignIn = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { loading } = useSelector(authSelector);

	const form = useForm({
		defaultValues: {
			username: "",
			password: "",
		},
	});

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = form;

	const errorBorder = (field) => {
		if (errors && errors[field]) {
			return `!border-red-500 !focus:ring-red-500 !focus:border-red-500 !placeholder-red-700`;
		} else {
			return `border-gray-300 focus:ring-primaryGreen focus:border-primaryGreen`;
		}
	};

	const handleFormSubmit = (formData) => {
		dispatch(toggleLoading(true));
		loginUser(formData)
			.then((response) => {
				const token = response.authentication_token;
				const current_user = {
					id: response.user_id,
					name: response.name,
					email: response.email,
					role: response.role,
					username: response.username,
				};
				dispatch(setAuthToken(token));
				dispatch(setCurrentUser(current_user));
				localforage
					.setItem("token", token)
					.then(() => {
						return localforage.setItem("user_info", JSON.stringify(current_user));
					})
					.then((res) => {
						dispatch(toggleLoading(false));
						navigate("/home");
					});
			})
			.catch((error) => {
				dispatch(toggleLoading(false));
				if (error.response && error.response.data) {
					dispatch(setErrors(error.response.data));
				} else {
					console.error("An error occurred:", error);
				}
			});
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
					className="w-[90%] max-w-lg p-12 bg-gray-100 border border-gray-300 rounded-lg bg-opacity-10"
					onSubmit={handleSubmit(handleFormSubmit)}
					noValidate
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
							className={`bg-transparent border text-white text-sm rounded-sm block w-full p-2.5 placeholder:text-gray-300 ${errorBorder(
								"username"
							)}`}
							placeholder="UserName00"
							{...register("username", { required: "Enter your username" })}
						/>
						<ErrorMessage error={errors} field="username"></ErrorMessage>
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
							className={`bg-transparent border text-white text-sm rounded-sm block w-full p-2.5 placeholder:text-gray-300 ${errorBorder(
								"password"
							)}`}
							placeholder="••••••••"
							{...register("password", {
								required: "Enter your password",
								// minLength: {
								// 	value: 8,
								// 	message: "Password must be at least 8 characters long",
								// },
							})}
						/>
						<ErrorMessage error={errors} field="password"></ErrorMessage>
					</div>
					<button
						type="submit"
						disabled={loading}
						className="text-white bg-primaryGreen hover:bg-primaryGreenDark focus:ring-4 focus:outline-none font-medium rounded-sm text-sm w-full sm:w-auto px-5 py-2.5 text-center"
					>
						{loading ? (
							<>
								<svg
									aria-hidden="true"
									role="status"
									className="inline w-4 h-4 mr-3 text-white animate-spin"
									viewBox="0 0 100 101"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
										fill="#E5E7EB"
									/>
									<path
										d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
										fill="currentColor"
									/>
								</svg>
								Loading...
							</>
						) : (
							"Sign In"
						)}
					</button>
					<br />
					<Link to="/" className="flex items-center gap-2 py-2 font-medium text-primaryGreen">
						<FaArrowLeft /> Go Back
					</Link>
				</form>
			</div>
		</div>
	);
};

export default SignIn;
