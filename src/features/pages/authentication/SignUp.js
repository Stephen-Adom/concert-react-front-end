import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import {useForm} from 'react-hook-form'
import { DevTool } from "@hookform/devtools";
import { ErrorMessage } from "../../../components";

const SignUp = () => {
	const navigate = useNavigate();
	const form = useForm({
		defaultValues: {
			name: "",
			username: "",
			email: "",
			password: "",
			password_confirmation: "",
		}
	});

	const {register, control, formState: {errors}, handleSubmit} = form

	const errorBorder = (field) => {
		if (errors && errors[field]) {
			return `!border-red-500 !focus:ring-red-500 !focus:border-red-500 !placeholder-red-700`;
		} else {
			return `border-gray-300 focus:ring-primaryGreen focus:border-primaryGreen`;
		}
	};

	const handleFormSubmit = (formData) => {
		console.log(formData);
	};

	return (
		<>
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
					onSubmit={handleSubmit(handleFormSubmit)}
					noValidate
				>
					<div className="mb-4">
						<label
							htmlFor="name"
							className="block mb-2 font-bold text-white text-md dark:text-white"
						>
							Full Name
						</label>
						<input
							type="text"
							id="name"
							className={`bg-transparent border text-white text-sm rounded-sm block w-full p-2.5 placeholder:text-gray-300 ${errorBorder(
								"name"
							)}`}
							placeholder="Your full name"
							{...register("name", { required: 'Enter your full name' })}
						/>
						<ErrorMessage error={errors} field="name"></ErrorMessage>
					</div>
					<div className="mb-4">
						<label
							htmlFor="username"
							className="block mb-2 font-bold text-white text-md dark:text-white"
						>
							Username
						</label>
						<input
							type="text"
							id="username"
							className={`bg-transparent border text-white text-sm rounded-sm block w-full p-2.5 placeholder:text-gray-300 ${errorBorder(
								"username"
							)}`}
							placeholder="UserName00"
							{...register("username", { required: 'Enter your username' })}
						/>

							<ErrorMessage error={errors} field="username"></ErrorMessage>
					</div>
					<div className="mb-4">
						<label
							htmlFor="email"
							className="block mb-2 font-bold text-white text-md dark:text-white"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							className={`bg-transparent border text-white text-sm rounded-sm block w-full p-2.5 placeholder:text-gray-300 ${errorBorder(
								"email"
							)}`}
							placeholder="example@domain.com"
							{...register("email", { required: 'Enter your email address',
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: 'Enter a valid email address'
								}
							 })}
						/>
						<ErrorMessage error={errors} field="email"></ErrorMessage>
					</div>
					<div className="mb-4">
						<label
							htmlFor="password"
							className="block mb-2 font-bold text-white text-md dark:text-white"
						>
							Password
						</label>
						<input
							type="password"
							id="password"
							className={`bg-transparent border text-white text-sm rounded-sm block w-full p-2.5 placeholder:text-gray-300 ${errorBorder(
								"password"
							)}`}
							placeholder="••••••••"
							{...register("password", { required: 'Enter your password',
							 minLength: {
								 value: 8,
								 message: 'Password must be at least 8 characters'
							 }
							 })}
						/>
						<ErrorMessage error={errors} field="password"></ErrorMessage>
					</div>
					<div className="mb-4">
						<label
							htmlFor="password_confirmation"
							className="block mb-2 font-bold text-white text-md dark:text-white"
						>
							Confirm Password
						</label>
						<input
							type="password"
							id="password_confirmation"
							className={`bg-transparent border text-white text-sm rounded-sm block w-full p-2.5 placeholder:text-gray-300 ${errorBorder(
								"password_confirmation"
							)}`}
							placeholder="••••••••"
							{...register("password_confirmation", { required: 'Confirm your password',
							 minLength: {
								 value: 8,
								 message: 'Password must be at least 8 characters'
							 },
							 validate: (fieldValue) => {
								return fieldValue === control._formValues.password ||	'Passwords do not match'
							 }
							 })}
						/>
						<ErrorMessage error={errors} field="password_confirmation"></ErrorMessage>
					</div>
					<button
						type="submit"
						className="text-white bg-primaryGreen hover:bg-primaryGreenDark focus:ring-4 focus:outline-none font-medium rounded-sm text-sm w-full sm:w-auto px-5 py-2.5 text-center"
					>
						Submit
					</button>
					<Link to="/" className="flex items-center gap-2 py-2 font-medium text-primaryGreen">
						<FaArrowLeft /> Go Back
					</Link>
				</form>
			</div>
		</div>
			<DevTool control={control} />
		</>

	);
};

export default SignUp;
