import { Button } from '@caterly/ui';

export default function HomePage() {
  return (
    <div className="text bg-slate-900 font-bold" style={{ color: 'red', height: '500px' }}>
      HomePage!!
      <Button appName="Admin">Click Me</Button>
    </div>
  );
}
