import { useState } from 'react';
import styled from 'styled-components';
import { AdditionalSettings, DropdownObject } from '../schema';
import ArrowToggle from './ArrowToggle';
import SubCard from './SubCard';
import ToggleSwitch from './ToggleSwitch';

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
}

function Card({
	title,
	name,
	dropdown,
	subCard,
	selected,
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
		<CardsWrapper>
			<CardMain subCard={subCard} dropdown={dropdown}>
				<h3>{title}</h3>
				{dropdown && (
					<DropdownContainer>
						<select>
							{dropdown.options.map((item) => (
								<option value={item}>{item}</option>
							))}
						</select>
					</DropdownContainer>
				)}

				<ToggleContainer>
					<ToggleSwitch
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
				<SubCard additionalSettings={additionalSettings!} />
			)}
		</CardsWrapper>
	);
}

const CardsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1 1 auto;
	max-width: 400px;
	padding-left: 30px;
	background-color: #1b1c20;
	border-radius: 5px;
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

	${({ subCard }) => (subCard ? 'padding:5px;' : 'padding: 25px;')}
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

export default Card;
