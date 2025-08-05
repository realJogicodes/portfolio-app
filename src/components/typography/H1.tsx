import type { ReactNode } from 'react';

export default function H1({ children }: { children: ReactNode }) {
	return <h1 className="text-6xl font-bold font-display">{children}</h1>;
}
