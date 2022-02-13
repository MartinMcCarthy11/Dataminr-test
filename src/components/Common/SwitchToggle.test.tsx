import { render, screen, cleanup } from '@testing-library/react';

import SwitchToggle from './SwitchToggle';

afterEach(cleanup);

const testId = 'switch-toggle-test-id';

const testData = {
	toggle: true,
	name: 'Test',
	onChange: jest.fn(() => null),
};

test('Renders SwitchToggle Base', () => {
	const { toggle, name, onChange } = testData;
	render(<SwitchToggle toggled={toggle} name={name} onChange={onChange} />);
	expect(screen.getByTestId(testId)).toBeTruthy();
});

test('Renders SwitchToggle Disabled', () => {
	const { toggle, name, onChange } = testData;
	render(<SwitchToggle toggled={toggle} name={name} onChange={onChange} />);
	const input = screen.getByTestId('input-test-id');
	expect(input).toBeChecked();
});
