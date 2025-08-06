import H2 from './typography/H2';
import ExternalLink from './typography/ExternalLink';

export default function SocialMedia() {
	const socialMedia = [
		{ name: 'GitHub', href: 'https://github.com/realJogicodes' },
		{ name: 'LinkedIn', href: 'https://linkedin.com/in/jogicodes' },
		{ name: 'X', href: 'https://x.com/jogicodes' }
	];
	return (
		<section className="mt-8">
			<H2>Find me on social media</H2>
			<ul className="flex gap-2">
				{socialMedia.map((social) => (
					<li key={social.name}>
						<ExternalLink href={social.href}>{social.name}</ExternalLink>
					</li>
				))}
			</ul>
		</section>
	);
}
