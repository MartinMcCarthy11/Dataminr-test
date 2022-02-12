import { Section } from './schema';
import ToggleCardContainer from './components/ToggleCardContainer/ToggleCardContainer';

type Props = {
	schema: Section[];
};

function App({ schema }: Props) {
	return <ToggleCardContainer schema={schema} />;
}

export default App;
