import { Link } from 'react-router-dom';

import { Button } from '@caterly/design';

export function Header() {
	return (
		<header className="w-full container-padding py-3">
			<div className="flex items-center justify-between">
				<Link
					to="/"
					className="block w-[140px] md:w-[175px] lg:w-[200px] h-auto"
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
					className="text-lg md:text-xl lg:text-2xl mr-[-16px]"
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
