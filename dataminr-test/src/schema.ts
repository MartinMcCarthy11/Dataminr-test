import { v4 as uuidv4 } from 'uuid';

export interface DropdownObject {
	initialSelection: string;
	options: string[];
}

export interface AdditionalSettings {
	id: string;
	title: string;
	name: string;
	subCard: boolean;
	dropdown?: DropdownObject;
	selected: boolean;
	additionalSettings: AdditionalSettings[];
}

export interface Card {
	id: string;
	title: string;
	name: string;
	selected: boolean;
	dropdown?: DropdownObject;
	subCard: boolean;
	additionalSettings: AdditionalSettings[];
}

export interface Section {
	id: string;
	title: string;
	name: string;
	card: Card[];
}

export const schema: Section[] = [
	{
		id: uuidv4(),
		title: 'General',
		name: 'general',
		card: [
			{
				id: uuidv4(),
				title: 'Case Management',
				name: 'caseManagement',
				selected: true,
				additionalSettings: [],
				subCard: false,
			},
			{
				id: uuidv4(),
				title: 'Map Timeline',
				name: 'mapTimeline',
				selected: true,
				additionalSettings: [],
				subCard: false,
			},
		],
	},
	{
		id: uuidv4(),
		title: 'Settings',
		name: 'settings',
		card: [
			{
				id: uuidv4(),
				title: 'Users',
				name: 'users',
				selected: false,
				subCard: false,
				dropdown: {
					initialSelection: '20',
					options: ['10', '20', '30', '40', '50'],
				},
				additionalSettings: [
					{
						id: uuidv4(),
						title: 'Users Add',
						name: 'usersAdd',
						selected: true,
						additionalSettings: [],
						subCard: true,
					},
					{
						id: uuidv4(),
						title: 'Users Delete',
						name: 'usersDelete',
						selected: true,
						additionalSettings: [],
						subCard: true,
					},
				],
			},
		],
	},
];
