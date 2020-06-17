import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders a message', () => {
  const { container, getByText } = render(<App />)
  expect(getByText('Hello')).toBeInTheDocument()
})