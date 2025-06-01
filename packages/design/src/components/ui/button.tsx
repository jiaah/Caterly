import { cn } from '@caterly/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all border border-transparent disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:inset-ring-2 aria-invalid:inset-ring-2",
	{
		variants: {
			variant: {
				default: 'bg-primary text-on-bg shadow-xs hover:bg-primary-hover',
				secondary: 'bg-secondary text-on-bg shadow-xs hover:bg-secondary-hover',
				destructive: 'bg-error text-on-bg shadow-xs hover:bg-error-hover',
				outline:
					'border-base bg-surface shadow-xs hover:bg-surface-muted hover:text-primary hover:border-primary dark:bg-surface/20 dark:border-accent dark:text-soft-white dark:hover:bg-surface-muted/80',
				ghost:
					'text-base hover:bg-surface-muted hover:text-primary dark:hover:bg-surface-muted/80',
				link: 'text-base underline-offset-4 hover:underline hover:text-primary',
			},
			size: {
				default: 'h-9 px-4 py-2 has-[>svg]:px-3',
				sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
				lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
				icon: 'size-9',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
);

function Button({
	className,
	variant,
	size,
	asChild = false,
	...props
}: React.ComponentProps<'button'> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
	}) {
	const Comp = asChild ? Slot : 'button';

	return (
		<Comp
			data-slot="button"
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		/>
	);
}

export { Button, buttonVariants };
