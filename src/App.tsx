import { Section } from './schema';
import Dashboard from './components/Dashboard/Dashboard';
import styled from 'styled-components';

interface AppProps {
	schema: Section[];
}

function App({ schema }: AppProps) {
	return (
		<AppWrapper>
			<Dashboard schema={schema} />
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
