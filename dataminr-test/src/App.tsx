import { Section } from './schema';
import ToggleCardContainer from './components/ToggleCardContainer/ToggleCardContainer';
import styled from 'styled-components';

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
	width: 80%;
	margin: 0 auto;
	padding: 25px;
	@media screen and (max-width: 768px) {
		padding: 0;
		width: 100%;
	}
`;
export default App;
