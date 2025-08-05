import H2 from './typography/H2';

export default function Skills() {
	const skills = ['JavaScript', 'Svelte', 'Python', 'Swift', 'TailwindCSS', 'SQLite3', 'PocketBase', 'Supabase'];
	return (
		<section className="bg-slate-100 p-4 rounded-2xl flex flex-col items-start gap-4 mt-4">
			<H2>Skills</H2>
			<p>
				Before I started learning React, I already had some programming experience. I’ve been writing code since 2017, starting with simple tools in Python, then building web apps
				from 2019 and iOS projects from 2025. I started with Python and Flask, then moved to JavaScript with Svelte, and later learned Swift to write native iOS apps.
			</p>
			<ul className="flex gap-2">
				{skills.map((skill) => (
					<li className=" border-1 border-black rounded-full px-2">{skill}</li>
				))}
			</ul>
		</section>
	);
}
