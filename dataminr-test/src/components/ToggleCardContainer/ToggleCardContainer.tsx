import { Section, Card as SchemaCard } from '../../schema';
import styled from 'styled-components';
import Card from './Card';

interface Props {
	schema: Section[];
}

function ToggleCardContainer({ schema }: Props) {
	return (
		<SectionWrapper>
			{schema.map((section) => (
				<section key={section.id}>
					<h1>{section.title}</h1>
					<CardContainerWrapper>
						{section.card.map((card: SchemaCard) => (
							<Card
								key={card.id}
								title={card.title}
								name={card.name}
								selected={card.selected}
								dropdown={card.dropdown}
								additionalSettings={
									card.additionalSettings &&
									card.additionalSettings
								}
								subCard={card.subCard}
							/>
						))}
					</CardContainerWrapper>
				</section>
			))}
		</SectionWrapper>
	);
}

const CardContainerWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 2em;
`;

const SectionWrapper = styled.section`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	column-gap: 2em;
`;

export default ToggleCardContainer;
