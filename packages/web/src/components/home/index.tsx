import { Feature } from './Feature';
import { HeroContent } from './HeroContent';
import { HeroImage } from './HeroImage';
import { HeroSlider } from './HeroSlider';

import { Header } from '../layout/Header';

export const Home = () => {
	return (
		<>
			<div className="relative h-[100vh] w-full">
				<HeroImage />
				<HeroSlider>
					{({ currentIndex }) => <HeroContent currentIndex={currentIndex} />}
				</HeroSlider>
				<div className="absolute top-0 left-0 w-full">
					<Header />
				</div>
			</div>

			<Feature />
		</>
	);
};
