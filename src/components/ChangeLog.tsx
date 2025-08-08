import DT from './typography/DT';
import H2 from './typography/H2';

export default function ChangeLog() {
	const changelog = [
		{
			date: 'August 8th, 2025',
			change: 'Avatar image added to hero section, change log refactored'
		},
		{
			date: 'August 6th, 2025',
			change: 'Refactor: Social media component added.'
		},
		{
			date: 'August 5th, 2025',
			change:
				'Refactor: App container, skills section, hero section, external link, H1, H2, DT and change log components added. Code made more maintainable. Display font added, bricolage grotesque FTW.'
		},
		{
			date: 'August 4th, 2025',
			change: 'Project started and hosted on Vercel.'
		}
	];

	return (
		<section className="mt-8">
			<H2>Changelog</H2>
			<dl>
				{changelog.map((item) => (
					<>
						<DT>{item.date}</DT>
						<dd>{item.change}</dd>
					</>
				))}
			</dl>
		</section>
	);
}
