import H2 from './typography/H2';

export default function ChangeLog() {
	return (
		<section className="mt-8">
			<H2>Changelog</H2>
			<dl>
				<dt>August 5th, 2025</dt>
				<dd>Refactor: App container, H1, H2 and change log components added. Code made more maintainable.</dd>
				<dt>August 4th, 2025</dt>
				<dd>Project started and hosted on Vercel.</dd>
			</dl>
		</section>
	);
}
