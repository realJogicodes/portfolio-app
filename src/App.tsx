import './App.css';
import Container from './components/Container';
import H1 from './components/headings/H1';
import ChangeLog from './components/ChangeLog';
import Skills from './components/Skills';

function App() {
	return (
		<Container>
			<main className="flex flex-col items-start gap-3">
				<H1>React Portfolio App</H1>
				<p className="text-2xl">Documenting the journey of learning React</p>
				<p className="text-lg">
					Hi! I am Jogi, a web developer who knows Svelte pretty well. I do not know much about React. In my opinion, there's no better way of learning something than doing it.
					Hence this page. Building it, I am learning React, and of course I am building this using React.
				</p>
			</main>
			<Skills />
			<ChangeLog />
		</Container>
	);
}

export default App;
