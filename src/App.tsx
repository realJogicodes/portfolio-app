import './App.css';
import ChangeLog from './components/ChangeLog';
import Container from './components/Container';
import Hero from './components/Hero';
import Skills from './components/Skills';
import SocialMedia from './components/SocialMedia';

function App() {
	return (
		<Container>
			<Hero />
			<Skills />
			<SocialMedia />
			<ChangeLog />
		</Container>
	);
}

export default App;
