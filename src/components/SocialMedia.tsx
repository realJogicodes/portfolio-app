import H2 from './typography/H2';
import ExternalLink from './typography/ExternalLink';
import { SiGithub, SiYoutube, SiX } from '@icons-pack/react-simple-icons';

export default function SocialMedia() {
	const socialMedia = [
		{ name: 'GitHub', href: 'https://github.com/realJogicodes', hasIcon: true, icon: <SiGithub /> },
		{ name: 'X.com', href: 'https://x.com/jogicodes', hasIcon: true, icon: <SiX /> },
		{ name: 'YouTube', href: 'https://www.youtube.com/@jogicodes', hasIcon: true, icon: <SiYoutube /> },
		{ name: 'LinkedIn', href: 'https://www.linkedin.com/in/jogi-c-17b9b4309/', hasIcon: false }
	];
	return (
		<section className="mt-8 flex flex-col items-start gap-4">
			<H2>Find me on social media</H2>
			<ul className="flex gap-5">
				{socialMedia.map((social) => (
					<li key={social.name}>
						<a className="flex flex-col items-center gap-2" href={social.href} target="_blank" rel="noopener noreferrer">
							{social.hasIcon ? (
								social.icon
							) : (
								<span className="text-xs italic text-gray-500">
									logo not allowed <br />
									by brand owner
								</span>
							)}
							<p className="text-sm">{social.name}</p>
						</a>
					</li>
				))}
			</ul>
		</section>
	);
}
