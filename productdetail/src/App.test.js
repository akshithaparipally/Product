import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the product detail experience', async () => {
  render(<App />);

  expect(screen.getByText(/loading product details/i)).toBeInTheDocument();

  const heading = await screen.findByRole('heading', { name: /aura smartwatch/i, level: 1 });
  expect(heading).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /add to bag/i })).toBeInTheDocument();
});
