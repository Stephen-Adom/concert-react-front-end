import { render, screen } from '@testing-library/react';
import ErrorMessage from '../ErrorMessage';

const testError = {
  username: {
    message: 'Must be at least 3 characters',
  },
};

const field = 'username';

describe('Error Message', () => {
  it('should render correctly', () => {
    render(<ErrorMessage error={testError} field={field} />);

    const alertMessage = screen.getByRole('alert');

    expect(alertMessage).toBeInTheDocument();
    expect(alertMessage.textContent).toEqual(testError[field].message);
  });

  it('should not display any error if no errors found', () => {
    render(<ErrorMessage error={{}} field={field} />);

    const alertMessage = screen.queryByRole('alert');

    expect(alertMessage).toBeFalsy();
  });
});
