import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SidebarLink from '../SidebarLink';

describe('Sidebar Link', () => {
  test('should render correctly', () => {
    render(
      <BrowserRouter>
        <SidebarLink label="Test" path="/test" />
      </BrowserRouter>,
    );
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
