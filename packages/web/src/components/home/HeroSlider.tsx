import { useEffect, useRef, useState } from 'react';

import { Button } from '@caterly/design';
import { ChevronLeft, ChevronRight, PauseIcon, PlayIcon } from 'lucide-react';

import { HERO_CONTENT } from './constants/hero.data';

interface HeroSlideProps {
	children: (args: { currentIndex: number }) => React.ReactNode;
}

const FADE_DURATION = 200;
const AUTO_PLAY_INTERVAL = 3800;

export const HeroSlider = ({ children }: HeroSlideProps) => {
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [fade, setFade] = useState<boolean>(true);
	const [isPlaying, setPlaying] = useState<boolean>(true);

	const transitionTimeout = useRef<number | undefined>(undefined);
	const cycleTimeout = useRef<number | undefined>(undefined);

	const stopAutoPlay = () => {
		clearTimeout(transitionTimeout.current);
		clearTimeout(cycleTimeout.current);
	};

	useEffect(() => {
		if (!isPlaying) {
			return () => stopAutoPlay();
		}

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
	}, [isPlaying]);

	const handleToggleAutoPlay = () => {
		setPlaying((prev) => !prev);
	};

	const handleGoToSlide = (nextIndex: number) => {
		if (isPlaying) {
			setPlaying(false);
			stopAutoPlay();
		}

		setFade(false);
		setTimeout(() => {
			setCurrentIndex(nextIndex);
			setFade(true);
		}, FADE_DURATION);
	};

	const handlePrev = () => {
		const nextIndex =
			currentIndex === 0 ? HERO_CONTENT.length - 1 : currentIndex - 1;
		handleGoToSlide(nextIndex);
	};

	const handleNext = () => {
		const nextIndex =
			currentIndex === HERO_CONTENT.length - 1 ? 0 : currentIndex + 1;
		handleGoToSlide(nextIndex);
	};

	return (
		<>
			<div className="absolute inset-0 flex items-center">
				<div
					className={`container text-left text-white font-light transition-opacity duration-200 ${
						fade ? 'opacity-100' : 'opacity-0'
					}`}
				>
					{children({ currentIndex })}
				</div>
			</div>
			<div className="absolute bottom-4 left-0 w-full flex items-center justify-center gap-4 text-white">
				<Button variant="ghost" size="lg" onClick={handlePrev}>
					<ChevronLeft className="size-6 md:size-8" strokeWidth={2.5} />
				</Button>
				<div className="text md:text-base px-4">
					{currentIndex + 1} / {HERO_CONTENT.length}
				</div>
				<Button variant="ghost" size="lg" onClick={handleToggleAutoPlay}>
					{isPlaying ? (
						<PauseIcon
							className="size-5 md:size-6"
							strokeWidth={0.5}
							fill="currentColor"
						/>
					) : (
						<PlayIcon
							className="size-4 md:size-6"
							strokeWidth={0.5}
							fill="currentColor"
						/>
					)}
				</Button>
				<Button variant="ghost" size="lg" onClick={handleNext}>
					<ChevronRight className="size-6 md:size-8" strokeWidth={2.5} />
				</Button>
			</div>
		</>
	);
};
