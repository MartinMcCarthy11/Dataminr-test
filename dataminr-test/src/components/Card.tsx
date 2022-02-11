import { useState } from 'react';
import styled from 'styled-components';
import { AdditionalSettings } from '../schema';
import ArrowToggle from './ArrowToggle';
import SubCard from './SubCard';
import ToggleSwitch from './ToggleSwitch';

interface cardProps
	extends JSX.IntrinsicAttributes,
		React.HtmlHTMLAttributes<HTMLElement> {
	title: string;
	name: string;
	selected: boolean;
	dropdown?: boolean;
	additionalSettings: AdditionalSettings[];
}

function Card({
	title,
	name,
	dropdown,
	selected,
	additionalSettings,
}: cardProps) {
	const [toggled, setToogled] = useState(selected);
	// const [subOptionsAvailable, setShowSubOptionsAvailable] = useState(false);
	const [showHiddenSection, setShowHiddenSection] = useState(false);
	const [disabled, setDisabled] = useState(false);
	const updateToggleState = (toggled: boolean) => {
		setToogled(!toggled);
		// setShowSubOptionsAvailable(!toggled);
		setShowHiddenSection(!toggled && false);
		// setDisabled(toggled);
	};

	const toggleOptionsVisibility = () => {
		if (showHiddenSection) {
			setShowHiddenSection(false);
			setDisabled(true);
		} else {
			setShowHiddenSection(true);
			setDisabled(false);
		}
	};

	// const updateSchema = () => {

	// }

	return (
		<CardsWrapper>
			<CardMain>
				<h3>{title}</h3>

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
	padding: 25px;
	padding-left: 30px;
	background-color: grey;
	border-radius: 5px;
`;

const CardMain = styled.div`
	display: grid;
	grid-template-columns: 3.5fr 1fr;
	align-items: center;
`;

const ToggleContainer = styled.div`
	display: flex;
	justify-content: end;
	gap: 0.5em;
`;

export default Card;
