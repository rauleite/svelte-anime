/**
 * Prepare cjs modules that are imported from tailwind.config.cjs
 */
const path = require('path');
const fs = require('fs');

const configPath = './config';

/**
 * rename dir js to cjs
 */
const listDir = (dir, fileList = []) => {
	let files = fs.readdirSync(dir);
	// console.log('files', files);
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
foundFiles.forEach((f) => {
	console.log('rename', f.oldSrc, f.newSrc);
	fs.renameSync(f.oldSrc, f.newSrc);
});
