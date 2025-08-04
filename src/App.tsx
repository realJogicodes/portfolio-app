import './App.css';

function App() {
	return (
		<>
			<div className="flex justify-center pt-4">
				<div className="container max-w-7xl">
					<main className="flex flex-col items-start gap-3">
						<h1 className="font-bold text-6xl">React Portfolio App</h1>
						<p className="text-2xl">Documenting the journey of learning React</p>
						<p className="text-lg">
							Hi! I am Jogi, a web developer who knows Svelte pretty well. I do not know much about React. In my opinion, there's no better way of learning something than doing it.
							Hence this page. Building it, I am learning React, and of course I am building this using React.
						</p>
					</main>
					<section className="bg-slate-100 p-4 rounded-2xl flex flex-col items-start gap-4 mt-4">
						<h2 className="text-2xl font-bold">Skills</h2>
						<p>
							Predating this challenge, I know some programming already. I've been writing code for my own needs, the web and for iOS since 2017. I started with python, before
							learning Flask, Svelte and Swift.
						</p>
						<ul className="flex gap-2">
							<li className=" border-1 border-black rounded-full px-2">JavaScript</li>
							<li className=" border-1 border-black rounded-full px-2">Svelte</li>
							<li className=" border-1 border-black rounded-full px-2">Python</li>
							<li className=" border-1 border-black rounded-full px-2">Swift</li>
							<li className=" border-1 border-black rounded-full px-2">TailwindCSS</li>
							<li className=" border-1 border-black rounded-full px-2">SQlite3</li>
							<li className=" border-1 border-black rounded-full px-2">PocketBase</li>
							<li className=" border-1 border-black rounded-full px-2">Supabase</li>
						</ul>
					</section>
					<section className="mt-8">
						<h2 className="text-2xl font-bold">Changelog</h2>
						<dl>
							<dd>August 4th, 2025</dd>
							<dt>Project Started and hosted on Vercel.</dt>
						</dl>
					</section>
				</div>
			</div>
		</>
	);
}

export default App;
