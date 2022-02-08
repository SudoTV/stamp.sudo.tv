/**
 * @author WMXPY
 */

const FS = require("fs");
const OS = require("os");
const Path = require("path");

const { exec } = require("child_process");
const { readlineQuestion } = require("./util");

const blankImagePath = Path.join(__dirname, '..', 'stamp', '$', 'blank', 'blank.png');
const blankYMLPath = Path.join(__dirname, '..', '_data', 'stamp', 'blank.yml');

(async () => {

    const stampName = await readlineQuestion("Stamp Name");

    const targetPathFolder = Path.join(__dirname, '..', 'stamp', '$', stampName);

    const targetYMLPath = Path.join(__dirname, '..', '_data', 'stamp', `${stampName}.yml`);

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear().toString();
    const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const currentDay = currentDate.getDate().toString().padStart(2, '0');

    const availableRarity = [
        "well-known",
        "uncommon",
        "worthy",
        "rare",
        "dazzle",
        "sparkling",
        "priceless",
        "special",
    ];

    let chooseRarityIndex = null;

    while (typeof availableRarity[parseInt(chooseRarityIndex)] === 'undefined') {

        console.log("[----] Pick a Rarity:");
        availableRarity.forEach((method, index) => {
            console.log(`[----] ${index}: ${method}`);
        });

        chooseRarityIndex = await readlineQuestion("Rarity (Index)");

        if (typeof availableRarity[parseInt(chooseRarityIndex)] === 'undefined') {
            console.log("[ERRR] Invalid Index");
        }
    }

    console.log(`[INFO] Method: ${availableRarity[parseInt(chooseRarityIndex)]}`);

    const availableMethods = [
        "regular",
        "auto",
        "email",
        "pull-request",
        "special",
    ];

    const pickedMethods = [];
    console.log("[----] Pick Methods:");

    while (true) {

        console.log(`[----] Method #${pickedMethods.length + 1}:`);

        availableMethods.forEach((method, index) => {

            if (pickedMethods.includes(method)) {
                return;
            }
            console.log(`[----] ${index}: ${method}`);
        });

        const chooseMethodIndex = await readlineQuestion(`Method #${pickedMethods.length + 1} (Index)`);

        if (chooseMethodIndex === "") {
            break;
        }

        const chooseMethodValue = availableMethods[chooseMethodIndex];

        if (!pickedMethods.includes(chooseMethodValue)) {

            pickedMethods.push(chooseMethodValue);
        } else {

            console.log("[WARN] Already picked, Skipped");
        }

        console.log(`[INFO] Methods: ${pickedMethods.join(', ')}`);
    }

    const blankYMLData = FS.readFileSync(blankYMLPath, 'utf8');
    const fixedBlankYML = blankYMLData
        .replace('identifier: blank', `identifier: ${stampName}`)
        .replace('rarity: special', `rarity: ${availableRarity[parseInt(chooseRarityIndex)]}`)
        .replace('  - special', pickedMethods.map((method) => {

            return `  - ${method}`;
        }).join('\n'))
        .replace('2022-01-27', `${currentYear}-${currentMonth}-${currentDay}`)
        .replace('https://stamp.sudo.tv/stamp/$/blank/blank.png', `https://stamp.sudo.tv/stamp/$/${stampName}/en-US.png`)
        .replace('https://stamp.sudo.tv/stamp/$/blank/blank.png', `https://stamp.sudo.tv/stamp/$/${stampName}/en-US.png`)
        .replace('label: "空白贴纸"', 'label: "PLACEHOLDER"')
        .replace('description: "完全空白的贴纸"', 'description: |-\n      PLACEHOLDER')
        .replace('how-to-get: "哈，这就不知道了"', 'how-to-get: |-\n      PLACEHOLDER')
        .replace('label: "Blank Stamp"', 'label: "PLACEHOLDER"')
        .replace('description: "Completely blank stamp"', 'description: |-\n      PLACEHOLDER')
        .replace('how-to-get: "Ha, I don\'t know then"', 'how-to-get: |-\n      PLACEHOLDER');

    const preview = await readlineQuestion("Preview? (y/n)");

    if (preview === 'y') {

        console.log("[INFO] Preview:");
        console.log(fixedBlankYML);
    }

    const confirm = await readlineQuestion("Confirm? (y/n)");

    if (confirm !== 'y') {

        console.log("[INFO] Canceled");
        return;
    }

    if (!FS.existsSync(targetPathFolder)) {
        FS.mkdirSync(targetPathFolder);
    }

    FS.copyFileSync(blankImagePath, Path.join(targetPathFolder, 'en-US.png'));

    console.log(`[INFO] Stamp Icon ${stampName} created`);

    FS.writeFileSync(targetYMLPath, fixedBlankYML);

    console.log(`[INFO] Stamp YML ${stampName} created`);

    const platform = OS.platform();

    if (platform === 'win32') {

        const withPaint = await readlineQuestion("Open With Paint? (y/n)");

        if (withPaint === 'y') {

            exec(`mspaint ${Path.join(targetPathFolder, 'en-US.png')}`);

            console.log(`[INFO] Opening ${Path.join(targetPathFolder, 'en-US.png')} (Paint)`);
        } else {

            exec(`start ${targetPathFolder}`);

            console.log(`[INFO] Opening ${targetPathFolder} (file manager)`);
        }
    } else {

        exec(`open ${targetPathFolder}`);

        console.log(`[INFO] Opening ${targetPathFolder} (file manager)`);
    }

    exec(`code ${Path.join(targetPathFolder, 'en-US.png')}`);

    console.log(`[INFO] Opening ${Path.join(targetPathFolder, 'en-US.png')} (VSCode)`);

    exec(`code ${targetYMLPath}`);

    console.log(`[INFO] Opening ${Path.join(targetYMLPath, stampName)}.yml`);
    console.log("[INFO] Finished");
})();