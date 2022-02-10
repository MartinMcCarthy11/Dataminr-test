import { v4 as uuidv4 } from 'uuid';

export interface AdditionalSettings {
	id: string;
	title: string;
	dropdown?: string[];
	toggled: boolean;
}

export interface Card {
	id: string;
	title: string;
	additionalSettings?: AdditionalSettings[];
}

export interface Section {
	id: string;
	title: string;
	card: Card[];
}

export const schema: Section[] = [
	{
		id: uuidv4(),
		title: 'General',
		card: [
			{
				id: uuidv4(),
				title: 'Case Management',
			},
			{
				id: uuidv4(),
				title: 'Map Timeline',
			},
		],
	},
	{
		id: uuidv4(),
		title: 'Settings',
		card: [
			{
				id: uuidv4(),
				title: 'Users',
				additionalSettings: [
					{
						id: uuidv4(),
						title: 'Users Add',
						toggled: true,
					},
					{
						id: uuidv4(),
						title: 'Users Delete',
						toggled: false,
					},
				],
			},
		],
	},
];
