import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import SignIn from "../SignIn";

const mockStore = configureMockStore();

const initialState = {
	currentUser: null,
	error: null,
	loading: false,
	token: null,
};

const store = mockStore(initialState);

describe("Sign In Page", () => {
	it("should render correctly", () => {
		render(
			<Provider store={store}>
				<SignIn />
			</Provider>
		);
		expect(screen.getByText("Sign In")).toBeInTheDocument();
	});
});
