import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SwiperSlide from '../SwiperSlide';

const concert = {
  id: 1,
  image:
		'https://res.cloudinary.com/dt8tdf7uu/image/upload/v1688563048/samples/animals/kitten-playing.gif',
  name: 'Test name',
  description: 'Test description',
  band: 'Test band',
  artist: 'Test artist',
};

test('should render correctly', () => {
  render(
    <BrowserRouter>
      <SwiperSlide concert={concert} />
    </BrowserRouter>,
  );

  const name = screen.getByRole('heading', {
    level: 3,
  });

  const image = screen.getByRole('img');
  const description = screen.getByTestId('description');

  expect(name.textContent).toEqual(concert.name);
  expect(image).toBeInTheDocument();
  expect(description.textContent).toEqual(concert.description);
});
