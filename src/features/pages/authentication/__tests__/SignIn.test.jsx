import { render, screen, act, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { useForm } from "react-hook-form";
import SignIn from "../SignIn";

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

function setup(jsx) {
	return {
		user: userEvent.setup(),
		...render(jsx),
	};
}

describe("Sign In", () => {
	test("should render correctly", () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<SignIn />
				</BrowserRouter>
			</Provider>
		);

		const heading = screen.getByRole("heading", {
			name: "Sign In",
			level: 1,
		});

		const usernameField = screen.getByRole("textbox", {
			id: "username",
		});

		const passwordField = screen.getByRole("textbox", {
			id: "password",
		});

		const submitButton = screen.getByRole("button", {
			name: "Sign In",
		});

		const goBackLink = screen.getByRole("link", {
			name: "Go Back",
		});

		expect(heading).toBeInTheDocument();

		expect(usernameField).toBeInTheDocument();

		expect(passwordField).toBeInTheDocument();

		expect(submitButton).toBeInTheDocument();

		expect(goBackLink).toBeInTheDocument();
	});

	test("form should be display error messages when fields are invalid", async () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<SignIn />
				</BrowserRouter>
			</Provider>
		);

		const signInButton = screen.getByRole("button", {
			name: "Sign In",
		});

		fireEvent.submit(signInButton);
		expect(await screen.findAllByRole("alert")).toHaveLength(2);
	});

	test("form should display one error message when only one field is empty", async () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<SignIn />
				</BrowserRouter>
			</Provider>
		);

		const passwordField = screen.getByRole("textbox", {
			id: "password",
		});

		const signInButton = screen.getByRole("button", {
			name: "Sign In",
		});

		fireEvent.input(passwordField, {
			target: {
				value: "password",
			},
		});

		fireEvent.submit(signInButton);

		expect(await screen.findAllByRole("alert")).toHaveLength(1);
	});

	test("form should display no error message when field is valid", async () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<SignIn />
				</BrowserRouter>
			</Provider>
		);

		const passwordField = screen.getByLabelText("Your password");
		const usernameField = screen.getByLabelText("Your username");

		const signInButton = screen.getByRole("button", {
			name: "Sign In",
		});

		await act(async () => {
			fireEvent.change(usernameField, {
				target: {
					value: "john123",
				},
			});
			fireEvent.change(passwordField, {
				target: {
					value: "password",
				},
			});

			await fireEvent.submit(signInButton);
		});

		expect(screen.queryAllByRole("alert")).toHaveLength(0);
	});
});
