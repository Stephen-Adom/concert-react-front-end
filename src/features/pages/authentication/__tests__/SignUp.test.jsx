import { render, screen, act, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { BrowserRouter } from "react-router-dom";
import SignUp from "../SignUp";

const mockStore = configureMockStore();

const initialState = {
	auth: {
		currentUser: null,
		error: null,
		loading: false,
		token: null,
	},
};

const store = mockStore(initialState);

describe("Sign Up", () => {
	test("should render correctly", () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<SignUp />
				</BrowserRouter>
			</Provider>
		);

		const heading = screen.getByRole("heading", {
			name: "Sign Up",
			level: 1,
		});

		const nameField = screen.getByLabelText("Full Name");

		const usernameField = screen.getByLabelText("Username");

		const emailField = screen.getByLabelText("Email");

		const passwordField = screen.getByLabelText("Password");

		const confirmPasswordField = screen.getByLabelText("Confirm Password");

		const submitButton = screen.getByRole("button", {
			name: "Sign Up",
		});

		const goBackLink = screen.getByRole("link", {
			name: "Go Back",
		});

		expect(heading).toBeInTheDocument();

		expect(nameField).toBeInTheDocument();

		expect(usernameField).toBeInTheDocument();

		expect(emailField).toBeInTheDocument();

		expect(passwordField).toBeInTheDocument();

		expect(confirmPasswordField).toBeInTheDocument();

		expect(submitButton).toBeInTheDocument();

		expect(goBackLink).toBeInTheDocument();
	});

	test("form should be display error messages when fields are invalid", async () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<SignUp />
				</BrowserRouter>
			</Provider>
		);

		const signUpButton = screen.getByRole("button", {
			name: "Sign Up",
		});

		fireEvent.submit(signUpButton);
		expect(await screen.findAllByRole("alert")).toHaveLength(5);
	});

	test("form should submit when the form is valid", async () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<SignUp />
				</BrowserRouter>
			</Provider>
		);

		const nameField = screen.getByLabelText("Full Name");

		const usernameField = screen.getByLabelText("Username");

		const emailField = screen.getByLabelText("Email");

		const passwordField = screen.getByLabelText("Password");

		const confirmPasswordField = screen.getByLabelText("Confirm Password");

		const submitButton = screen.getByRole("button", {
			name: "Sign Up",
		});

		await act(async () => {
			fireEvent.input(nameField, {
				target: {
					value: "John Doe",
				},
			});

			fireEvent.input(usernameField, {
				target: {
					value: "jdoe",
				},
			});

			fireEvent.input(emailField, {
				target: {
					value: "jdoe@mail.com",
				},
			});

			fireEvent.input(passwordField, {
				target: {
					value: "password",
				},
			});

			fireEvent.input(confirmPasswordField, {
				target: {
					value: "password",
				},
			});

			await fireEvent.submit(submitButton);
		});

		expect(await screen.queryAllByRole("alert")).toHaveLength(0);
	});

	test("Email should be a valid email", async () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<SignUp />
				</BrowserRouter>
			</Provider>
		);

		const nameField = screen.getByLabelText("Full Name");

		const usernameField = screen.getByLabelText("Username");

		const emailField = screen.getByLabelText("Email");

		const passwordField = screen.getByLabelText("Password");

		const confirmPasswordField = screen.getByLabelText("Confirm Password");

		const submitButton = screen.getByRole("button", {
			name: "Sign Up",
		});

		await act(async () => {
			fireEvent.input(nameField, {
				target: {
					value: "John Doe",
				},
			});

			fireEvent.input(usernameField, {
				target: {
					value: "jdoe",
				},
			});

			fireEvent.input(emailField, {
				target: {
					value: "jdoe@jdoe",
				},
			});

			fireEvent.input(passwordField, {
				target: {
					value: "password",
				},
			});

			fireEvent.input(confirmPasswordField, {
				target: {
					value: "password",
				},
			});

			await fireEvent.submit(submitButton);
		});

		const ErrorMessage = await screen.queryByRole("alert");

		expect(ErrorMessage.textContent).toEqual("Enter a valid email address");
	});
});
