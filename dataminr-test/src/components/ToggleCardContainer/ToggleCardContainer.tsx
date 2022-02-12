import { Section, Card as SchemaCard } from '../../schema';
import styled from 'styled-components';
import ToggleCard from './ToggleCard';

interface Props {
	schema: Section[];
}

function ToggleCardContainer({ schema }: Props) {
	return (
		<SectionWrapper>
			{schema.map((section) => (
				<section key={section.id}>
					<h1>{section.title}</h1>
					{section.combined ? (
						<CombinedSectionWrapper>
							{section.card.map((card: SchemaCard) => (
								<ToggleCard
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
									cardSize={card.cardSize}
								/>
							))}
						</CombinedSectionWrapper>
					) : (
						<CardContainerWrapper>
							{section.card.map((card: SchemaCard) => (
								<ToggleCard
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
					)}
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

const CombinedSectionWrapper = styled.section`
	div {
		border-radius: 0;
	}

	div:first-child {
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
	}
	div:last-child {
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
	}
`;

export default ToggleCardContainer;
