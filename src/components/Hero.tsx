import H1 from './typography/H1';
import ExternalLink from './typography/ExternalLink';
import avatar from '../assets/avatar.jpg';

export default function Hero() {
	return (
		<main className="flex flex-col items-start gap-3">
			<div className="flex items-center gap-3">
				<img src={avatar} alt="Jogi headshot" className="size-18 rounded-full" />
				<div className="flex flex-col">
					<H1>React Portfolio App</H1>
					<p className="text-2xl -mt-2">Documenting the journey of learning React</p>
				</div>
			</div>
			<p className="">
				Hi, I'm Jogi — a web developer who’s pretty handy with Svelte, and now diving into React. I believe the best way to learn is by building real things. That’s exactly what
				this site is: my React learning journey, turned into a portfolio.
			</p>
			<p className="">
				The code for this React app is available on <ExternalLink href="https://github.com/realJogicodes/portfolio-app">GitHub</ExternalLink>.
			</p>
		</main>
	);
}
