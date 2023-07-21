import { render, screen } from "@testing-library/react";
import SwiperNextButton from "../SwiperNextButton";

test("should render correctly", () => {
	render(<SwiperNextButton swiper={{ slideNext: jest.fn() }} disableNextButton={false} />);

	const button = screen.getByRole("button");

	expect(button).toBeInTheDocument();
});
