import type { ReactNode } from 'react';

export default function Container({ children }: { children: ReactNode }) {
	return <div className="container max-w-7xl mx-auto mt-8">{children}</div>;
}
