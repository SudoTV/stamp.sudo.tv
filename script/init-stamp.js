/**
 * @author WMXPY
 */

const FS = require("fs");
const Path = require("path");
const Readline = require('readline');

const blankImagePath = Path.join(__dirname, '..', 'stamp', 'blank', 'blank.png');

const readline = Readline.createInterface(
    process.stdin,
    process.stdout,
);

readline.question('[~~~~] Stamp Name: ', (stampName) => {

    const targetPathFolder = Path.join(__dirname, '..', 'stamp', '$', stampName);

    FS.mkdirSync(targetPathFolder);
    FS.copyFileSync(blankImagePath, Path.join(targetPathFolder, 'en-US.png'));

    console.log(`[INFO] Stamp Icon ${stampName} created.`);
});
