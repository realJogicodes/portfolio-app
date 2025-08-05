import type { ReactNode } from 'react';

export default function ExternalLink({ children, href }: { children: ReactNode; href: string }) {
	return (
		<a className="underline text-blue-600" href={href} target="_blank" rel="noopener noreferrer">
			{children}
		</a>
	);
}
