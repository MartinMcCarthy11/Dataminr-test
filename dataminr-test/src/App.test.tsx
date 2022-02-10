import React from 'react';
import { render, screen } from '@testing-library/react';
import { schema } from './schema';
import App from './App';

test('renders learn react link', () => {
	render(<App schema={schema} />);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});
