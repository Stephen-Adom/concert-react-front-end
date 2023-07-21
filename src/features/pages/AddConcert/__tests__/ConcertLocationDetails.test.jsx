import { render, screen, act, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import ConcertLocationDetails from "../ConcertLocationDetails.js";

const mockStore = configureMockStore();

const initialState = {
	concert: {
		latestConcerts: [],
		newConcertInfo: {},
		allConcerts: [],
		concertLocations: [],
		errors: null,
	},
};

const store = mockStore(initialState);

describe("Concert Location Details", () => {
	test("should render correctly", () => {
		render(
			<Provider store={store}>
				<ConcertLocationDetails setStep={jest.fn()} />
			</Provider>
		);

		const pageTitle = screen.getByTestId("pageTitle");
		const tableRows = screen.queryAllByRole("row");

		const hallNameElement = screen.getByPlaceholderText("Main Town Hall");
		const cityElement = screen.getByRole("combobox", {
			id: "city",
		});
		const seatElement = screen.getByPlaceholderText("000");
		const dateElement = screen.getByPlaceholderText("Select date");

		expect(pageTitle).toBeInTheDocument();
		expect(hallNameElement).toBeInTheDocument();
		expect(cityElement).toBeInTheDocument();
		expect(seatElement).toBeInTheDocument();
		expect(dateElement).toBeInTheDocument();
		expect(tableRows.length).toEqual(2);
	});

	test("form should be invalid when no value is entered", async () => {
		render(
			<Provider store={store}>
				<ConcertLocationDetails setStep={jest.fn()} />
			</Provider>
		);

		const submitButton = screen.getByRole("button", {
			name: "Continue",
		});

		await fireEvent.submit(submitButton);

		const alertMessages = await screen.findAllByRole("alert");

		expect(alertMessages.length).toEqual(4);
	});

	test("table row should increase when add new hall button is clicked", async () => {
		render(
			<Provider store={store}>
				<ConcertLocationDetails setStep={jest.fn()} />
			</Provider>
		);

		const addNewHallButton = screen.getByRole("button", {
			name: "Add New Hall",
		});

		await fireEvent.click(addNewHallButton);

		const tableRows = screen.queryAllByRole("row");

		expect(tableRows.length).toEqual(3);
	});

	test("form should be submitted with valid values", async () => {
		setStep = jest.fn();
		render(
			<Provider store={store}>
				<ConcertLocationDetails setStep={setStep} />
			</Provider>
		);

		const hallNameElement = screen.getByPlaceholderText("Main Town Hall");
		const cityElement = screen.getByRole("combobox", {
			id: "city",
		});
		const seatElement = screen.getByPlaceholderText("000");
		const dateElement = screen.getByTestId("datetime");

		await act(async () => {
			await fireEvent.input(hallNameElement, {
				target: {
					value: "Test Hall",
				},
			});
			await fireEvent.change(cityElement, {
				target: {
					value: "New York",
				},
			});
			await fireEvent.input(seatElement, {
				target: {
					value: 3000,
				},
			});
			await fireEvent.change(dateElement, {
				target: {
					value: "2023-07-22T15:30",
				},
			});
		});

		const submitButton = screen.getByRole("button", {
			name: "Continue",
		});

		await act(async () => {
			await fireEvent.submit(submitButton);
		});

		const alertMessages = await screen.queryAllByRole("alert");

		expect(alertMessages.length).toEqual(0);
		expect(setStep).toHaveBeenCalledTimes(1);
	});
});
