import { Button } from '@caterly/ui';

function App() {
	return (
		<>
			<p className="bg-yellow-300">Hello Web</p>
			<Button appName="packages/ui" className="text-yellow">
				Click Me
			</Button>
		</>
	);
}

export { App };
