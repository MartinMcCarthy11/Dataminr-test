import { v4 as uuidv4 } from 'uuid';

export interface AdditionalSettings {
	id: string;
	title: string;
	name: string;
	dropdown?: string[];
	selected: boolean;
	additionalSettings: AdditionalSettings[];
}

export interface Card {
	id: string;
	title: string;
	name: string;
	selected: boolean;
	dropdown?: boolean;
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
			},
			{
				id: uuidv4(),
				title: 'Map Timeline',
				name: 'mapTimeline',
				selected: true,
				additionalSettings: [],
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
				additionalSettings: [
					{
						id: uuidv4(),
						title: 'Users Add',
						name: 'usersAdd',
						selected: true,
						additionalSettings: [],
					},
					{
						id: uuidv4(),
						title: 'Users Delete',
						name: 'usersDelete',
						selected: true,
						additionalSettings: [],
					},
				],
			},
		],
	},
];
