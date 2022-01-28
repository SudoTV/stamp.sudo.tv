/**
 * @author WMXPY
 */

const FS = require("fs");
const Path = require("path");

const { exec } = require("child_process");

const rawDataStamps = FS.readdirSync(Path.join(__dirname, '..', '_data', 'stamp'));
const rawEnUSStamps = FS.readdirSync(Path.join(__dirname, '..', 'en-US', 'stamp'));
const rawZhCNStamps = FS.readdirSync(Path.join(__dirname, '..', 'zh-CN', 'stamp'));

const dataStamps = rawDataStamps.filter((filename) => {
    return filename.endsWith('.yml');
}).map((filename) => {
    return filename.slice(0, -4);
});
const enUSStamps = rawEnUSStamps.map((filename) => {
    return filename.slice(0, -3);
});
const zhCNStamps = rawZhCNStamps.map((filename) => {
    return filename.slice(0, -3);
});

const enUSMissedStamps = dataStamps.filter((stamp) => {
    return !enUSStamps.includes(stamp);
});
const zhCNMissedStamps = dataStamps.filter((stamp) => {
    return !zhCNStamps.includes(stamp);
});

const getStampData = (stampName) => {

    return new Promise((resolve, reject) => {

        const path = Path.join(__dirname, '..', '_data', 'stamp', `${stampName}.yml`);
        exec(`js-yaml ${path}`, (error, stdout, stderr) => {
            if (error) {
                reject(error);
                return;
            }
            if (stderr) {
                reject(stderr);
                return;
            }
            resolve(JSON.parse(stdout));
        });
    });
};

const enUSPattern = FS.readFileSync(Path.join(__dirname, 'en-us-pattern.txt'), 'utf8');
const zhCNPattern = FS.readFileSync(Path.join(__dirname, 'zh-cn-pattern.txt'), 'utf8');

(async () => {

    for (const enUSMissedStamp of enUSMissedStamps) {

        const stampData = await getStampData(enUSMissedStamp);

        const parsedFileContent = enUSPattern
            .replace(/\$\(IDENTIFIER\)/g, stampData.identifier)
            .replace(/\$\(LABEL\)/g, stampData.localization['en-US'].label);

        FS.writeFileSync(Path.join(__dirname, '..', 'en-US', 'stamp', `${enUSMissedStamp}.md`), parsedFileContent);

        console.log(`[INFO] Generated ${enUSMissedStamp} for en-US`);
    }

    for (const zhCNMissedStamp of zhCNMissedStamps) {

        const stampData = await getStampData(zhCNMissedStamp);

        const parsedFileContent = zhCNPattern
            .replace(/\$\(IDENTIFIER\)/g, stampData.identifier)
            .replace(/\$\(LABEL\)/g, stampData.localization['zh-CN'].label);

        FS.writeFileSync(Path.join(__dirname, '..', 'zh-CN', 'stamp', `${zhCNMissedStamp}.md`), parsedFileContent);

        console.log(`[INFO] Generated ${zhCNMissedStamp} for zh-CN`);
    }
})();
