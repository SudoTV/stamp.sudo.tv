/**
 * @author WMXPY
 */

const FS = require("fs");
const Path = require("path");
const Readline = require('readline');

const blankImagePath = Path.join(__dirname, '..', 'stamp', '$', 'blank', 'blank.png');
const blankYMLPath = Path.join(__dirname, '..', '_data', 'stamp', 'blank.yml');

const readline = Readline.createInterface(
    process.stdin,
    process.stdout,
);

readline.question('[~~~~] Stamp Name: ', (stampName) => {

    const targetPathFolder = Path.join(__dirname, '..', 'stamp', '$', stampName);

    if (!FS.existsSync(targetPathFolder)) {
        FS.mkdirSync(targetPathFolder);
    }

    FS.copyFileSync(blankImagePath, Path.join(targetPathFolder, 'en-US.png'));

    console.log(`[INFO] Stamp Icon ${stampName} created`);

    const targetYMLPath = Path.join(__dirname, '..', '_data', 'stamp', `${stampName}.yml`);

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear().toString();
    const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const currentDay = currentDate.getDate().toString().padStart(2, '0');

    const blankYMLData = FS.readFileSync(blankYMLPath, 'utf8');
    const fixedBlankYML = blankYMLData
        .replace('identifier: blank', `identifier: ${stampName}`)
        .replace('2022-01-27', `${currentYear}-${currentMonth}-${currentDay}`)
        .replace('https://stamp.sudo.tv/stamp/$/blank/blank.png', `https://stamp.sudo.tv/stamp/$/${stampName}/en-US.png`)
        .replace('https://stamp.sudo.tv/stamp/$/blank/blank.png', `https://stamp.sudo.tv/stamp/$/${stampName}/en-US.png`);

    FS.writeFileSync(targetYMLPath, fixedBlankYML);

    console.log(`[INFO] Stamp YML ${stampName} created`);

    readline.close();
});
