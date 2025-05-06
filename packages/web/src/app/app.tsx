import { Button } from '@caterly/ui';

function App() {
	return (
		<>
			<p className="bg-yellow-300">Hello Web</p>
			<Button appName="packages/web" className="text-tertiary text-4xl">
				Click Me
			</Button>
		</>
	);
}

export { App };
