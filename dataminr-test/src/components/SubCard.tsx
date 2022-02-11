import styled from 'styled-components';
import { AdditionalSettings } from '../schema';
import Card from './Card';

interface SubCardProps {
	additionalSettings: AdditionalSettings[];
	dropdown?: boolean;
}

function SubCard({ additionalSettings }: SubCardProps) {
	return (
		<SubCardWrapper>
			{additionalSettings.map((card) => (
				<Card
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
	margin-left: 25px;
	border-radius: 5px;
`;

export default SubCard;
