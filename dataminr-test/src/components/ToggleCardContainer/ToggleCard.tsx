import { useState } from 'react';
import styled from 'styled-components';
import { AdditionalSettings, DropdownObject } from '../../schema';
import ArrowToggle from '../Common/ArrowToggle';
import ToggleSubCard from './ToggleSubCard';
import SwitchToggle from '../Common/SwitchToggle';

export type CardSize = 'small' | 'standard';

interface CardProps
	extends StyleProps,
		JSX.IntrinsicAttributes,
		React.HtmlHTMLAttributes<HTMLElement> {
	title: string;
	name: string;
	selected: boolean;
	additionalSettings: AdditionalSettings[];
}

interface StyleProps {
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
}: CardProps) {
	const [toggled, setToogled] = useState(selected);
	const [showHiddenSection, setShowHiddenSection] = useState(false);
	const [disabled, setDisabled] = useState(false);
	const [arrowOrietation, setArrowOrientation] = useState('down');

	const updateToggleState = (toggled: boolean) => {
		setToogled(!toggled);
		setShowHiddenSection(!toggled && false);
		setDisabled(toggled);
	};

	const toggleOptionsVisibility = () => {
		if (showHiddenSection) {
			setShowHiddenSection(false);
			setArrowOrientation('down');
		} else {
			setShowHiddenSection(true);
			setArrowOrientation('up');
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

				<ToggleContainer subCard={subCard}>
					<SwitchToggle
						name={name}
						toggled={toggled}
						onChange={() => updateToggleState(toggled)}
					/>

					{additionalSettings!.length > 0 && (
						<ArrowToggle
							arrowOrientation={arrowOrietation}
							onClick={() => {
								toggleOptionsVisibility();
							}}
							isDisabled={toggled}
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

const CardsWrapper = styled.div<StyleProps>`
	display: flex;
	flex-direction: column;
	flex: ${({ subCard }) => (subCard ? '0 1 50px;' : '1 1 420px;')};
	padding-left: 30px;
	background-color: #1b1c20;
	border-radius: 10px;
	font-size: 14px;

	@media screen and (max-width: 768px) {
		padding-left: 0;
	}
`;

const CardMain = styled.div<StyleProps>`
	display: grid;
	grid-auto-columns: 1fr;
	grid-template-columns: ${({ dropdown }) =>
		dropdown !== undefined ? '3.5fr 2fr 1.5fr' : '3.5fr 1.5fr'};
	grid-template-rows: 0.5fr;
	gap: 0px 0px;
	grid-template-areas: ${({ dropdown }) =>
		dropdown !== undefined ? '. . .' : '. .'};
	align-items: center;
	min-width: 370px;
	${({ subCard }) => (subCard ? 'padding:5px;' : 'padding: 25px;')}
	${({ cardSize }) => cardSize === 'small' && 'padding:5px 25px 5px 25px;'}

	@media screen and (max-width: 768px) {
		min-width: 80vw;
		${({ subCard }) => subCard && 'padding-left: 40px;'}
	}
`;

const ToggleContainer = styled.div<StyleProps>`
	display: flex;
	${({ subCard }) =>
		subCard ? 'justify-content: unset ;' : 'justify-content: end;'}
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
