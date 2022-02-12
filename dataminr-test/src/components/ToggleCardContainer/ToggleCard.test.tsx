import { render, screen, cleanup } from '@testing-library/react';
import ToggleCard from './ToggleCard';

afterEach(cleanup);
const testData = {
	toggle: true,
	title: 'Test',
	name: 'Test',
	selected: true,
	dropdown: { options: ['10', '20'] },
	additionalSettings: [],
	subCard: false,
	onChange: jest.fn(() => null),
};

test('Renders ToggleCard Base', () => {
	const { name, title, selected, subCard } = testData;
	render(
		<ToggleCard
			title={title}
			name={name}
			selected={selected}
			additionalSettings={[]}
			subCard={subCard}
		/>
	);
	expect(screen.getByTestId('toggle-card-test-id')).toBeTruthy();
});

test('Renders ToggleCard with Dropdown', () => {
	const { name, title, selected, dropdown, subCard } = testData;
	render(
		<ToggleCard
			title={title}
			name={name}
			selected={selected}
			dropdown={dropdown}
			additionalSettings={[]}
			subCard={subCard}
		/>
	);
	expect(screen.getByTestId('toggle-card-dropdown-test-id')).toBeTruthy();
});
