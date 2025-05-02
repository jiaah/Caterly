import { Button } from '@caterly/ui';
import { App } from '@caterly/web';

export default function HomePage() {
	return (
		<div className="font-bold" style={{ height: '500px' }}>
			<h1 className="text-primary">HomePage!!</h1>
			<Button appName="Admin" className="text-tertiary">
				Click Me
			</Button>
			<App />
		</div>
	);
}
