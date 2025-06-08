import { HeroContent } from './HeroContent';

export function Hero() {
	return (
		<section className="relative h-[calc(100vh-56px)] w-full">
			<img
				src="/assets/images/farm.webp"
				alt=""
				className="absolute inset-0 h-full w-full object-cover"
			/>
			<div className="absolute inset-0 bg-gradient-to-tr from-black/70 to-neutral-800/50" />
			<HeroContent />
		</section>
	);
}
