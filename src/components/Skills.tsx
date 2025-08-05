import H2 from './typography/H2';

export default function Skills() {
	const skills = ['JavaScript', 'Svelte', 'Python', 'Swift', 'TailwindCSS', 'SQLite3', 'PocketBase', 'Supabase'];
	return (
		<section className="bg-slate-100 p-4 rounded-2xl flex flex-col items-start gap-4 mt-4">
			<H2>Skills</H2>
			<p>
				Predating this challenge, I know some programming already. I've been writing code for my own needs, the web and for iOS since 2017. I started with python, before learning
				Flask, Svelte and Swift.
			</p>
			<ul className="flex gap-2">
				{skills.map((skill) => (
					<li className=" border-1 border-black rounded-full px-2">{skill}</li>
				))}
			</ul>
		</section>
	);
}
