/**
 * @author WMXPY
 */

const FS = require("fs");
const Path = require("path");

const { readlineQuestion } = require("./util");

const ymlFolder = Path.join(__dirname, "..", "_data", "stamp");

(async () => {

    const ymlList = FS.readdirSync(ymlFolder);
    const fixedYmlList = ymlList.filter((file) => {
        return file.endsWith(".yml");
    }).map((file) => {
        return file.replace(".yml", "");
    });

    const originalStamp = await readlineQuestion("Original Stamp", fixedYmlList);

    if (!fixedYmlList.includes(originalStamp)) {

        console.log(`[ERRR] Stamp: ${originalStamp} Not Found`);
        return;
    }

    const targetStamp = await readlineQuestion("Target Stamp", fixedYmlList);

    if (fixedYmlList.includes(targetStamp)) {

        console.log(`[ERRR] Stamp: ${targetStamp} Already Exists`);
        return;
    }

    const originalYmlPath = Path.join(ymlFolder, `${originalStamp}.yml`);
    const originalImageFolderPath = Path.join(__dirname, "..", "stamp", "$", originalStamp);
    const originalEnUSPath = Path.join(__dirname, "..", "en-US", "stamp", `${originalStamp}.md`);
    const originalZhCNPath = Path.join(__dirname, "..", "zh-CN", "stamp", `${originalStamp}.md`);

    const targetYmlPath = Path.join(ymlFolder, `${targetStamp}.yml`);
    const targetImageFolderPath = Path.join(__dirname, "..", "stamp", "$", targetStamp);
    const targetEnUSPath = Path.join(__dirname, "..", "en-US", "stamp", `${targetStamp}.md`);
    const targetZhCNPath = Path.join(__dirname, "..", "zh-CN", "stamp", `${targetStamp}.md`);

    FS.renameSync(originalYmlPath, targetYmlPath);
    FS.renameSync(originalImageFolderPath, targetImageFolderPath);
    FS.renameSync(originalEnUSPath, targetEnUSPath);
    FS.renameSync(originalZhCNPath, targetZhCNPath);

    const yml = FS.readFileSync(targetYmlPath, "utf8");
    const zhCN = FS.readFileSync(targetZhCNPath, "utf8");
    const enUS = FS.readFileSync(targetEnUSPath, "utf8");

    FS.writeFileSync(targetYmlPath, yml.replace(new RegExp(originalStamp, 'g'), targetStamp));
    FS.writeFileSync(targetZhCNPath, zhCN.replace(new RegExp(originalStamp, 'g'), targetStamp));
    FS.writeFileSync(targetEnUSPath, enUS.replace(new RegExp(originalStamp, 'g'), targetStamp));

    console.log(`[INFO] Rename Stamp: ${originalStamp} -> ${targetStamp}`);
    console.log(`[INFO] Complete`);

    console.log(`[INFO] --- NOTE --- Stamps that Already Delivered Will Not Be Updated`);
    console.log(`[INFO] --- NOTE --- Update <USER-PROFILE>.yml for Profiles Manually`);
})();
