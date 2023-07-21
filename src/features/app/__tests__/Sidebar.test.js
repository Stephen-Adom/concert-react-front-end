import { screen, render } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Sidebar from '../Sidebar';

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

describe('Sidebar', () => {
  test('should render correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Sidebar />
        </BrowserRouter>
      </Provider>,
    );

    const navigation = screen.getByRole('navigation');

    expect(navigation).toBeInTheDocument();
  });
});
