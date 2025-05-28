import { Button } from '@cately/design';
import { App } from '@caterly/web';

export default function HomePage() {
	return (
		<div className="font-bold" style={{ height: '500px' }}>
			<h1 className="text-tertiary">HomePage!!</h1>
			<Button className="text-yellow-400 text-4xl">Click Me</Button>
			<App />
		</div>
	);
}
