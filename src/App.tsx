import './App.css';
import Container from './components/Container';
import H1 from './components/typography/H1';
import ChangeLog from './components/ChangeLog';
import Skills from './components/Skills';
import ExternalLink from './components/typography/ExternalLink';

function App() {
	return (
		<Container>
			<main className="flex flex-col items-start gap-3">
				<H1>React Portfolio App</H1>
				<p className="text-2xl">Documenting the journey of learning React</p>
				<p className="">
					Hi, I'm Jogi — a web developer who’s pretty handy with Svelte, and now diving into React. I believe the best way to learn is by building real things. That’s exactly what
					this site is: my React learning journey, turned into a portfolio.
				</p>
				<p className="">
					The code for this React app is available on <ExternalLink href="https://github.com/realJogicodes/portfolio-app">GitHub</ExternalLink>.
				</p>
			</main>
			<Skills />
			<ChangeLog />
		</Container>
	);
}

export default App;
