import { Section, Card as SchemaCard } from '../../schema';
import styled from 'styled-components';
import ToggleCard from './ToggleCard';

interface Props extends StyleProps {
	schema: Section[];
}

interface StyleProps {
	sectionName?: string;
}

function ToggleCardContainer({ schema }: Props) {
	return (
		<MainContainerWrapper>
			{schema.map((section) => (
				<SectionWrapper key={section.id} sectionName={section.name}>
					<Heading>{section.title}</Heading>
					{section.combined ? (
						<CombinedCardContainerWrapper>
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
						</CombinedCardContainerWrapper>
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
				</SectionWrapper>
			))}
		</MainContainerWrapper>
	);
}

const CardContainerWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 2em;
`;

const MainContainerWrapper = styled.section`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: auto;
	grid-column-gap: 2em;
	grid-row-gap: 2em;
	grid-template-areas:
		'general general general'
		'settings alerts .';

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
		grid-template-areas:
			'general'
			'settings'
			'alerts';
	}
`;

const SectionWrapper = styled.div<StyleProps>`
	grid-area: ${({ sectionName }) => sectionName};
`;

const CombinedCardContainerWrapper = styled.section`
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

	div:not(:first-child):not(:last-child) {
		border-radius: 0px;
	}
`;

const Heading = styled.h2`
	@media screen and (max-width: 768px) {
		text-align: center;
	}
`;

export default ToggleCardContainer;
