import { Link } from 'react-router-dom';

import { Button } from '@caterly/design';

export const Header = () => {
	return (
		<header className="py-3 md:py-4 container">
			<div className="flex items-center justify-between self-center">
				<Link
					to="/"
					className="w-[130px] md:w-[175px] h-auto"
					aria-label="Go to home page"
				>
					<img
						src="/assets/images/logo.webp"
						alt="Company logo"
						className="h-full w-full"
					/>
				</Link>
				<Button
					variant="ghost"
					className="text-lg md:text-xl mr-[-8px]"
					aria-label="Go to login page"
					asChild
				>
					<Link to="/login">Log In</Link>
				</Button>
			</div>
		</header>
	);
};
