import type { ReactNode } from 'react';

import { cn } from '../../cn';

interface ButtonProps {
	readonly children: ReactNode;
	readonly className?: string;
	readonly appName: string;
}

export function Button({ children, className, appName }: ButtonProps) {
	return (
		<button
			type="button"
			className={cn('text-blue-700 p-2', className)}
			onClick={() => alert('clicked')}
		>
			{children} ({appName})
		</button>
	);
}
