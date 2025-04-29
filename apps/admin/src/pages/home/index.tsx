import { Button } from '@caterly/ui';
import { App } from '@caterly/web';

export default function HomePage() {
	return (
		<div className="font-bold" style={{ height: '500px' }}>
			<h1 className="text-primary">HomePage!!</h1>
			<App />
			<Button appName="Admin" className="text-yellow">
				Click Me
			</Button>
		</div>
	);
}
