import { Section } from './schema';
import styled from 'styled-components';
import ToggleCardContainer from './components/ToggleCardContainer/ToggleCardContainer';

type Props = {
	schema: Section[];
};

function App({ schema }: Props) {
	return (
		<AppWrapper>
			<ToggleCardContainer schema={schema} />
		</AppWrapper>
	);
}

const AppWrapper = styled.main`
	background-color: #0d0d0f;
	color: #fff;
	height: 100%;
	margin: 0;
	padding: 50px;
`;

export default App;
