import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import LocationDetails from '../LocationDetails';

const mockStore = configureMockStore();

const initialState = {
  reservation: {
    allReservations: [
      {
        user: {
          id: 1,
          name: 'john doe',
        },
        concert: {
          id: 1,
          name: 'Test Concert',
          date: '2020-01-01T00:00:00',
        },
        concert_hall: {
          id: 1,
          name: 'Test Hall',
        },
        city: {
          name: 'Test City',
        },
      },
    ],
  },
};

const store = mockStore(initialState);

const testHall = {
  city_name: 'Test City',
  hall_name: 'Test Hall',
  total_seats: 100,
  reserved_seats: 50,
};

describe('Location Details', () => {
  test('should render correctly', () => {
    render(
      <Provider store={store}>
        <LocationDetails hall={testHall} />
      </Provider>,
    );

    const hallTitle = screen.getByRole('heading', {
      level: 5,
    });

    const hallName = screen.getByTestId('hallname');
    const seats = screen.getByTestId('seats');
    const reserved = screen.getByTestId('reserved');

    expect(hallTitle.textContent).toEqual(testHall.city_name);
    expect(hallName.textContent).toEqual(testHall.hall_name);
    expect(seats.textContent).toEqual(`Total Seats:${testHall.total_seats}`);
    expect(reserved.textContent).toEqual(`Reserved:${testHall.reserved_seats}`);
  });

  test('should display reserved badge if user has reserved the hall', async () => {
    render(
      <Provider store={store}>
        <LocationDetails hall={testHall} />
      </Provider>,
    );

    const reservedBadge = await screen.findByTestId('reservedBadge');

    expect(reservedBadge).toBeInTheDocument();
  });
});
