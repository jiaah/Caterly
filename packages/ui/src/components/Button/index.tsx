import type { ReactNode } from 'react';

import { clsx } from 'clsx';

interface ButtonProps {
	readonly children: ReactNode;
	readonly className?: string;
	readonly appName: string;
}

export function Button({ children, className, appName }: ButtonProps) {
	return (
		<button
			type="button"
			className={clsx('text-primary p-2', className)}
			onClick={() => alert('clicked')}
		>
			{children} ({appName})
		</button>
	);
}
