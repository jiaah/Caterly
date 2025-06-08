import { Link } from 'react-router-dom';

import { Button } from '@caterly/design';

export function Header() {
	return (
		<header className="w-full container-padding py-3">
			<div className="flex items-center justify-between">
				<Link
					to="/"
					className="block w-[175px] md:w-[200px] lg:w-[220px] h-auto"
					aria-label="Go to home page"
				>
					<img
						src="/assets/images/logo.webp"
						alt="Company logo"
						className="block h-full w-full"
					/>
				</Link>
				<Button
					variant="ghost"
					className="text-lg md:text-xl lg:text-2xl md:px-6 lg:px-8"
					aria-label="Go to login page"
					asChild
				>
					<Link to="/login">login</Link>
				</Button>
			</div>
			<nav></nav>
		</header>
	);
}
