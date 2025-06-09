import { HERO_CONTENT } from './constants/hero.data';

export const HeroContent = ({ currentIndex }: { currentIndex: number }) => {
	const { title, description } = HERO_CONTENT[currentIndex] ?? {};

	return (
		<>
			<h1 className="text-4xl md:text-5xl">{title}</h1>
			<div className="text-xl md:text-2xl mt-4">{description}</div>
		</>
	);
};
