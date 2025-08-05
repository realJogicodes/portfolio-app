import './App.css';
import ChangeLog from './components/ChangeLog';
import Container from './components/Container';
import Hero from './components/Hero';
import Skills from './components/Skills';

function App() {
	return (
		<Container>
			<Hero />
			<Skills />
			<ChangeLog />
		</Container>
	);
}

export default App;
