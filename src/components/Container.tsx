import type { ReactNode } from 'react';

export default function Container({ children }: { children: ReactNode }) {
	return (
		<div className="flex justify-center pt-4">
			<div className="container max-w-7xl">{children}</div>
		</div>
	);
}
