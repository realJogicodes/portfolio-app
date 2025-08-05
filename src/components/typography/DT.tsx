import type { ReactNode } from 'react';

export default function DT({ children }: { children: ReactNode }) {
	return <dt className="font-semibold font-display">{children}</dt>;
}
