// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ChakraBlaze title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ChakraBlaze/i);
    expect(titleElement).toBeInTheDocument();
});
