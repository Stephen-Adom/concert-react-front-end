import { render, screen } from "@testing-library/react";
import SwiperPrevButton from "./../SwiperPrevButton";

test("should render correctly", () => {
	render(<SwiperPrevButton swiper={{ slidePrev: jest.fn() }} disablePrevButton={false} />);

	const button = screen.getByRole("button");

	expect(button).toBeInTheDocument();
});
