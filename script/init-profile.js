/**
 * @author WMXPY
 */

const FS = require("fs");
const Path = require("path");

const { exec } = require("child_process");
const { readlineQuestion } = require("./util");

(async () => {

    const githubUsername = await readlineQuestion("GitHub Username");
    const displayName = await readlineQuestion("Display Name");

    const dataPathFolder = Path.join(__dirname, '..', '_data', 'hi');
    const createProfileTemplatePath = Path.join(__dirname, 'create-profile.txt');

    const originalEnUSPath = Path.join(__dirname, 'en-us-profile.txt');
    const originalZhCNPath = Path.join(__dirname, 'zh-cn-profile.txt');

    const targetEnUSPath = Path.join(__dirname, '..', 'en-US', 'hi', `${githubUsername}.md`);
    const targetZhCNPath = Path.join(__dirname, '..', 'zh-CN', 'hi', `${githubUsername}.md`);

    const createProfileTemplate = FS.readFileSync(createProfileTemplatePath, 'utf8');

    const createProfile = createProfileTemplate
        .replace(/<YOUR-GITHUB-USERNAME>/g, githubUsername)
        .replace(/<YOUR-DISPLAY-NAME>/g, displayName);

    const previewYML = await readlineQuestion("Preview Profile Config? (y/n)");

    if (previewYML === 'y') {

        console.log("[INFO] Preview Profile Config:");
        console.log(createProfile);
    }

    const enUSProfileTemplate = FS.readFileSync(originalEnUSPath, 'utf8');

    const enUSProfile = enUSProfileTemplate
        .replace(/<YOUR-GITHUB-USERNAME>/g, githubUsername)
        .replace(/<YOUR-DISPLAY-NAME>/g, displayName);

    const previewEnUSProfile = await readlineQuestion("Preview en-US Profile? (y/n)");

    if (previewEnUSProfile === 'y') {

        console.log("[INFO] Preview en-US Profile:");
        console.log(enUSProfile);
    }

    const zhCNProfileTemplate = FS.readFileSync(originalZhCNPath, 'utf8');

    const zhCNProfile = zhCNProfileTemplate
        .replace(/<YOUR-GITHUB-USERNAME>/g, githubUsername)
        .replace(/<YOUR-DISPLAY-NAME>/g, displayName);

    const previewZhCNProfile = await readlineQuestion("Preview zh-CN Profile? (y/n)");

    if (previewZhCNProfile === 'y') {

        console.log("[INFO] Preview zh-CN Profile:");
        console.log(zhCNProfile);
    }

    const confirm = await readlineQuestion("Confirm? (y/n)");

    if (confirm !== 'y') {

        console.log("[INFO] Canceled");
        return;
    }

    FS.writeFileSync(Path.join(dataPathFolder, `${githubUsername}.yml`), createProfile);

    console.log("[INFO] Profile Config Created");

    FS.writeFileSync(targetEnUSPath, enUSProfile);

    console.log("[INFO] en-US Profile Created");

    FS.writeFileSync(targetZhCNPath, zhCNProfile);

    console.log("[INFO] zh-CN Profile Created");

    exec(`code ${targetYMLPath}`);

    console.log(`[INFO] Opening ${dataPathFolder}/${githubUsername}.yml`);
    console.log("[INFO] Finished");
})();