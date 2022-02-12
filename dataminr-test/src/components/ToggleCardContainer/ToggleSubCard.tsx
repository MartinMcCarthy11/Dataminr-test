import styled from 'styled-components';
import { AdditionalSettings } from '../../schema';
import ToggleCard from './ToggleCard';

interface SubCardProps {
	additionalSettings: AdditionalSettings[];
	dropdown?: boolean;
}

function ToggleSubCard({ additionalSettings }: SubCardProps) {
	return (
		<SubCardWrapper>
			{additionalSettings.map((card) => (
				<ToggleCard
					key={card.id}
					title={card.title}
					name={card.name}
					selected={card.selected}
					dropdown={card.dropdown}
					additionalSettings={[]}
					subCard={card.selected}
				/>
			))}
		</SubCardWrapper>
	);
}

const SubCardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 4px;
	border-radius: 5px;
`;

export default ToggleSubCard;
