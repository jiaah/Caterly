import { useEffect, useRef, useState } from 'react';

import { Button } from '@caterly/design';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { HERO_CONTENT } from './constants/hero.data';

const FADE_DURATION = 200;
const AUTO_PLAY_INTERVAL = 3800;

export function HeroContent() {
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [fade, setFade] = useState<boolean>(true);

	const transitionTimeout = useRef<number | undefined>(undefined);
	const cycleTimeout = useRef<number | undefined>(undefined);

	const stopAutoPlay = () => {
		clearTimeout(transitionTimeout.current);
		clearTimeout(cycleTimeout.current);
	};

	useEffect(() => {
		const run = () => {
			setFade(false);

			transitionTimeout.current = setTimeout(() => {
				setCurrentIndex((prev) =>
					prev === HERO_CONTENT.length - 1 ? 0 : prev + 1,
				);
				setFade(true);

				cycleTimeout.current = setTimeout(run, AUTO_PLAY_INTERVAL);
			}, FADE_DURATION);
		};

		run();

		return () => {
			stopAutoPlay();
		};
	}, []);

	const goToSlide = (nextIndex: number) => {
		stopAutoPlay();

		setFade(false);
		setTimeout(() => {
			setCurrentIndex(nextIndex);
			setFade(true);
		}, FADE_DURATION);
	};

	const handlePrev = () => {
		const nextIndex =
			currentIndex === 0 ? HERO_CONTENT.length - 1 : currentIndex - 1;
		goToSlide(nextIndex);
	};
	const handleNext = () => {
		const nextIndex =
			currentIndex === HERO_CONTENT.length - 1 ? 0 : currentIndex + 1;
		goToSlide(nextIndex);
	};

	const { title, description } = HERO_CONTENT[currentIndex] ?? {};

	return (
		<div className="absolute inset-0 flex items-center text-white justify-between md:mx-8 lg:mx-10">
			<Button variant="ghost" size="lg" onClick={handlePrev}>
				<ChevronLeft className="size-6 md:size-8" />
			</Button>
			<div
				className={`text-left font-light w-full md:max-w-[350px] transition-opacity duration-200 ${
					fade ? 'opacity-100' : 'opacity-0'
				}`}
			>
				<h1 className="text-4xl md:text-5xl">{title}</h1>
				<div className="text-xl md:text-2xl mt-4">{description}</div>
			</div>
			<Button variant="ghost" size="lg" onClick={handleNext}>
				<ChevronRight className="size-6 md:size-8" />
			</Button>
		</div>
	);
}
