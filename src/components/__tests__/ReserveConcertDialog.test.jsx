import { render, screen, act, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import ReserveConcertDialog from "../ReserveConcertDialog";

const mockStore = configureMockStore();

const initialState = {
	auth: {
		currentUser: {
			id: 1,
			username: "testUser",
			email: "testEmail",
			role: "user",
			name: "Test User",
		},
		error: null,
		loading: false,
		token: null,
	},
};

const store = mockStore(initialState);

const testConcert = {
	name: "Test Concert",
	artist: "Test Artist",
	band: "Test Band",
	concert_halls: [
		{
			hall_name: "Test Hall",
			id: 1,
			city_name: "Test City",
			total_seats: 100,
			reserved_seats: 50,
			date: new Date(),
		},
	],
};

describe("Reserve Concert Dialog", () => {
	test("should render correctly", () => {
		render(
			<Provider store={store}>
				<ReserveConcertDialog
					visible={true}
					setVisible={() => {}}
					concert={testConcert}
					fetchConcertDetails={() => {}}
				/>
			</Provider>
		);

		const concertHall = screen.getByLabelText("Select Concert Hall / City / Time");
		const submitButton = screen.getByRole("button", {
			name: "Reserve",
		});
		const cancelButton = screen.getByRole("button", {
			name: "Cancel",
		});

		expect(concertHall).toBeInTheDocument();
		expect(submitButton).toBeInTheDocument();
		expect(cancelButton).toBeInTheDocument();
	});

	test("form should be invalid when fields are empty", async () => {
		render(
			<Provider store={store}>
				<ReserveConcertDialog
					visible={true}
					setVisible={() => {}}
					concert={testConcert}
					fetchConcertDetails={() => {}}
				/>
			</Provider>
		);

		const submitButton = screen.getByRole("button", {
			name: "Reserve",
		});

		fireEvent.submit(submitButton);

		const alert = await screen.findAllByRole("alert");

		expect(alert.length).toEqual(1);
	});

	test("form should be valid and submitted", async () => {
		render(
			<Provider store={store}>
				<ReserveConcertDialog
					visible={true}
					setVisible={() => {}}
					concert={testConcert}
					fetchConcertDetails={() => {}}
				/>
			</Provider>
		);

		const submitButton = screen.getByRole("button", {
			name: "Reserve",
		});

		const concertHall = screen.getByLabelText("Select Concert Hall / City / Time");

		await act(async () => {
			await fireEvent.change(concertHall, {
				target: {
					value: 1,
				},
			});

			await fireEvent.submit(submitButton);
		});

		const alert = await screen.queryAllByRole("alert");

		expect(alert.length).toEqual(0);
	});
});
