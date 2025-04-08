import fs from "node:fs/promises";
import path from "node:path";
import type { CommandFlags } from "@/cli/commands/download/impl";
import { getOrInstallBundletool } from "@/device/install/bundletool";
import { createTempDir } from "@/helper/tempDir";
import { $ } from "zx";

export const convertAabToApk = async (aabPath: string, flags: CommandFlags) => {
    const startTime = Date.now();
    const tempDir = await createTempDir("bitrise-api-cli", "0");
    const fileName = path.basename(aabPath, ".aab");
    const outPath = path.join(tempDir, `${fileName}.apks`);
    const zipPath = path.join(tempDir, `${fileName}.zip`);

    const bundletool = await getOrInstallBundletool();
    if (flags.debug) console.log(`bundletool installation type: ${bundletool.type} in path ${bundletool.path}`);

    if (bundletool.type === "global") {
        await $`bundletool build-apks --connected-device --bundle=${fileName}.aab --output=${outPath}`;
    } else if (bundletool.type === "jar") {
        await $`java -jar ${bundletool.path} build-apks --connected-device --bundle=${fileName}.aab --output=${outPath}`;
    }

    await fs.rename(outPath, zipPath);
    await $`unzip -o ${zipPath} -d ${tempDir}`;

    return { apkFolder: path.join(tempDir, "./splits"), duration: Date.now() - startTime };
};
