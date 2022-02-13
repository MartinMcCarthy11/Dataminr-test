import { v4 as uuidv4 } from 'uuid';
import { CardSize } from './components/Dashboard/ToggleCard/ToggleCard';

export interface DropdownObject {
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
	cardSize?: CardSize;
	additionalSettings: AdditionalSettings[];
}

export interface Section {
	id: string;
	title: string;
	name: string;
	combined?: boolean;
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
			{
				id: uuidv4(),
				title: 'Views & Briefings',
				name: 'viewsBriefings',
				selected: true,
				additionalSettings: [],
				subCard: false,
			},
			{
				id: uuidv4(),
				title: 'Notifications',
				name: 'notifications',
				selected: true,
				additionalSettings: [],
				subCard: false,
			},
			{
				id: uuidv4(),
				title: 'Mass Communications',
				name: 'massCommunications',
				selected: true,
				additionalSettings: [],
				subCard: false,
			},
			{
				id: uuidv4(),
				title: 'Traffic Cameras',
				name: 'trafficCameras',
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
		combined: true,
		card: [
			{
				id: uuidv4(),
				title: 'Audit Log',
				name: 'auditLog',
				selected: true,
				additionalSettings: [],
				subCard: false,
				cardSize: 'standard',
			},
			{
				id: uuidv4(),
				title: 'Users',
				name: 'users',
				selected: false,
				subCard: false,
				cardSize: 'standard',
				dropdown: {
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
	{
		id: uuidv4(),
		title: 'Alerts',
		name: 'alerts',
		combined: true,
		card: [
			{
				id: uuidv4(),
				title: 'Alert Manager',
				name: 'alertManager',
				selected: true,
				additionalSettings: [],
				subCard: false,
				cardSize: 'small',
			},
			{
				id: uuidv4(),
				title: 'Alert Rules',
				name: 'alertRules',
				selected: false,
				subCard: false,
				cardSize: 'small',
				dropdown: {
					options: ['10', '20', '30', '40', '50'],
				},
				additionalSettings: [],
			},
		],
	},
];
