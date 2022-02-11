import { Section } from './schema';
import styled from 'styled-components';
import Card from './components/Card';

type Props = {
	schema: Section[];
};

function App({ schema }: Props) {
	const showAdditionalOptions = () => {
		console.log(schema);
	};

	return (
		<AppWrapper>
			{schema.map((section) => (
				<section key={section.id}>
					<h1>{section.title}</h1>
					{showAdditionalOptions()}
					<CardContainerWrapper>
						{section.card.map((card) => (
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
		</AppWrapper>
	);
}

const AppWrapper = styled.main`
	background-color: #0d0d0f;
	color: #fff;
	height: 100vh;
	margin: 0;
	padding: 50px;
`;

const CardContainerWrapper = styled.section`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 2em;
`;

export default App;
