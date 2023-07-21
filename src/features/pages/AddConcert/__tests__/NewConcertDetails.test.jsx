import {
  render, screen, act, fireEvent,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import NewConcertDetails from '../NewConcertDetails.js';

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

describe('New Concert Details', () => {
  test('should render correctly', () => {
    render(
      <Provider store={store}>
        <NewConcertDetails setStep={jest.fn(() => {})} />
      </Provider>,
    );

    const concertNameElement = screen.getByLabelText('Name of Concert');
    const concertDescriptionElement = screen.getByLabelText('Concert Details');
    const artistNameElement = screen.getByLabelText('Name of Artist');
    const bandNameElement = screen.getByLabelText('Band Name');
    const imageElement = screen.getByLabelText('Concert Image(Url)');

    expect(concertNameElement).toBeInTheDocument();
    expect(concertDescriptionElement).toBeInTheDocument();
    expect(artistNameElement).toBeInTheDocument();
    expect(bandNameElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
  });

  test('form should be invalid when submitted with no values', async () => {
    render(
      <Provider store={store}>
        <NewConcertDetails setStep={jest.fn(() => {})} />
      </Provider>,
    );

    const submitButton = screen.getByRole('button', {
      name: 'Continue',
    });

    await fireEvent.submit(submitButton);

    const alertsMessages = await screen.findAllByRole('alert');

    expect(alertsMessages.length).toEqual(5);
  });

  test('form should be valid and setStep should be called', async () => {
    setStep = jest.fn();
    render(
      <Provider store={store}>
        <NewConcertDetails setStep={setStep} />
      </Provider>,
    );

    const concertNameElement = screen.getByLabelText('Name of Concert');
    const concertDescriptionElement = screen.getByLabelText('Concert Details');
    const artistNameElement = screen.getByLabelText('Name of Artist');
    const bandNameElement = screen.getByLabelText('Band Name');
    const imageElement = screen.getByLabelText('Concert Image(Url)');

    await act(async () => {
      await fireEvent.input(concertNameElement, {
        target: {
          value: 'Test Concert',
        },
      });

      await fireEvent.input(concertDescriptionElement, {
        target: {
          value: 'Test Concert Description',
        },
      });

      await fireEvent.input(artistNameElement, {
        target: {
          value: 'Test Artist',
        },
      });

      await fireEvent.input(bandNameElement, {
        target: {
          value: 'Test Band',
        },
      });

      await fireEvent.input(imageElement, {
        target: {
          value:
						'https://res.cloudinary.com/dt8tdf7uu/image/upload/v1688563048/samples/animals/kitten-playing.gif',
        },
      });
    });

    const submitButton = screen.getByRole('button', {
      name: 'Continue',
    });

    await act(async () => {
      await fireEvent.submit(submitButton);
    });

    const alertsMessages = await screen.queryAllByRole('alert');

    expect(alertsMessages.length).toEqual(0);
    expect(setStep).toHaveBeenCalledTimes(1);
  });
});
