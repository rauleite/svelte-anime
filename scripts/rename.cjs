/**
 * Prepare cjs modules that are imported from tailwind.config.cjs
 */
const path = require('path');
const fs = require('fs');
const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });
const configPath = './config';
const dryMode = false;

const log = (label, ...args) => {
	console.log(label, ...args);
	if (dryMode) {
		return true;
	}
	return false;
};
/**
 * rename dir js to cjs
 */
const listDir = (dir, fileList = []) => {
	let files = fs.readdirSync(dir);

	log('files', files);

	files.forEach((file) => {
		if (fs.statSync(path.join(dir, file)).isDirectory()) {
			fileList = listDir(path.join(dir, file), fileList);
		} else {
			if (/\.js$/.test(file)) {
				let name = file.split('.')[0].replace(/\s/g, '_') + '.cjs';
				let src = path.join(dir, file);
				let newSrc = path.join(dir, name);
				fileList.push({
					oldSrc: src,
					newSrc: newSrc,
				});
			}
		}
	});

	return fileList;
};

let foundFiles = listDir(configPath);

foundFiles.forEach(async (f) => {
	log('rename', f.oldSrc, f.newSrc);
	const answer = await rl.question('Confirm renaming file? y/n ');
	if (answer === 'n') {
		console.log('Writing aborted');
		return rl.close();
	}

	if (dryMode) return;
	fs.renameSync(f.oldSrc, f.newSrc);
	console.log('File changed');

	rl.close();
});
