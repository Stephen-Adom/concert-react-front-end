import { render, screen } from "@testing-library/react";
import ConcertTableDetails from "../ConcertTableDetails";

const concert = {
	name: "Test Concert",
	artist: "Test Artist",
	band: "Test Band",
};

describe("Concert Table Details", () => {
	test("should render correctly", async () => {
		render(<ConcertTableDetails concert={concert}></ConcertTableDetails>);

		const tableCell = screen.queryAllByRole("cell");
		expect(tableCell).toHaveLength(4);
	});

	test("should render correct concert data", () => {
		render(<ConcertTableDetails concert={concert}></ConcertTableDetails>);

		const artistName = screen.getByTestId("artist");
		const bandname = screen.getByTestId("band");

		expect(artistName.textContent).toEqual(concert.artist);
		expect(bandname.textContent).toEqual(concert.band);
	});
});
