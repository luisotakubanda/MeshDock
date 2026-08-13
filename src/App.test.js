// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MeshDock title', () => {
    render(<App />);
    const titleElement = screen.getByText(/MeshDock/i);
    expect(titleElement).toBeInTheDocument();
});
