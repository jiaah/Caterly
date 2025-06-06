/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

const apps = ['admin']; // App Folder Name
const srcDir = path.join(__dirname, 'packages/assets/images');

apps.forEach((app) => {
	const destDir = path.join(__dirname, `apps/${app}/public/assets/images`);
	fs.mkdirSync(destDir, { recursive: true });
	fs.readdirSync(srcDir).forEach((file) => {
		fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
	});
});
