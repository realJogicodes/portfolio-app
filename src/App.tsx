import './App.css';
import Container from './components/Container';
import ChangeLog from './components/ChangeLog';
import Skills from './components/Skills';
import Hero from './components/Hero';

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
