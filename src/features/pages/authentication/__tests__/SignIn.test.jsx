import { render, screen, act } from "@testing-library/react";
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

		await userEvent.click(signInButton); // Use userEvent.click instead of fireEvent.click

		const errorMessage = screen.getByText(/Enter your username/i);
		expect(errorMessage).toBeInTheDocument();
	});
});
