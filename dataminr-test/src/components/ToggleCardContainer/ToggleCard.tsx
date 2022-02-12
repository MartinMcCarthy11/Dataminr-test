import { useState } from 'react';
import styled from 'styled-components';
import { AdditionalSettings, DropdownObject } from '../../schema';
import ArrowToggle from '../Common/ArrowToggle';
import ToggleSubCard from './ToggleSubCard';
import SwitchToggle from '../Common/SwitchToggle';

export type CardSize = 'small' | 'standard';

interface cardProps
	extends styleCardProps,
		JSX.IntrinsicAttributes,
		React.HtmlHTMLAttributes<HTMLElement> {
	title: string;
	name: string;
	selected: boolean;
	additionalSettings: AdditionalSettings[];
}

interface styleCardProps {
	subCard: boolean;
	dropdown?: DropdownObject;
	cardSize?: CardSize;
}

function ToggleCard({
	title,
	name,
	dropdown,
	subCard,
	selected,
	cardSize,
	additionalSettings,
}: cardProps) {
	const [toggled, setToogled] = useState(selected);
	const [showHiddenSection, setShowHiddenSection] = useState(false);
	const [disabled, setDisabled] = useState(false);

	const updateToggleState = (toggled: boolean) => {
		setToogled(!toggled);
		setShowHiddenSection(!toggled && false);
		setDisabled(toggled);
	};

	const toggleOptionsVisibility = () => {
		if (showHiddenSection) {
			setShowHiddenSection(false);
		} else {
			setShowHiddenSection(true);
		}
	};

	// const updateSchema = () => {

	// }

	return (
		<CardsWrapper subCard={subCard} data-testid='toggle-card-test-id'>
			<CardMain subCard={subCard} dropdown={dropdown} cardSize={cardSize}>
				<h3>{title}</h3>
				{dropdown && (
					<DropdownContainer data-testid='toggle-card-dropdown-test-id'>
						<select>
							{dropdown.options.map((item) => (
								<option key={item} value={item}>
									{item}
								</option>
							))}
						</select>
					</DropdownContainer>
				)}

				<ToggleContainer>
					<SwitchToggle
						name={name}
						toggled={toggled}
						onChange={() => updateToggleState(toggled)}
					/>

					{additionalSettings!.length > 0 && (
						<ArrowToggle
							onClick={() => {
								toggleOptionsVisibility();
							}}
							isDisabled={disabled}
						/>
					)}
				</ToggleContainer>
			</CardMain>
			{additionalSettings!.length > 0 && showHiddenSection && toggled && (
				<ToggleSubCard
					additionalSettings={additionalSettings!}
					data-testid='toggle-card-additional-settings-test-id'
				/>
			)}
		</CardsWrapper>
	);
}

const CardsWrapper = styled.div<styleCardProps>`
	display: flex;
	flex-direction: column;
	flex: ${({ subCard }) => (subCard ? '0 1 50px;' : '0 1 420px;')};
	padding-left: 30px;
	background-color: #1b1c20;
	border-radius: 10px;
	font-size: 14px;
`;

const CardMain = styled.div<styleCardProps>`
	display: grid;
	grid-auto-columns: 1fr;
	grid-template-columns: ${({ dropdown }) =>
		dropdown !== undefined ? '3.5fr 2fr 1.5fr' : '3.5fr 1.5fr'};
	grid-template-rows: 0.5fr;
	gap: 0px 0px;
	grid-template-areas: ${({ dropdown }) =>
		dropdown !== undefined ? '. . .' : '. . '};
	align-items: center;
	min-width: 370px;
	${({ subCard }) => (subCard ? 'padding:5px;' : 'padding: 25px;')}
	${({ cardSize }) => cardSize === 'small' && 'padding:5px 25px 5px 25px;'}
`;

const ToggleContainer = styled.div`
	display: flex;
	justify-content: end;
	gap: 0.5em;
`;

const DropdownContainer = styled.div`
	select {
		width: 80px;
		background-color: #0d0d0f;
		padding: 4px;
		color: #fff;
		border: 0px;
	}
`;

export default ToggleCard;
