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
					dropdown={card.dropdown && true}
					additionalSettings={[]}
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
	background-color: grey;
	border-radius: 5px;
`;

export default SubCard;
