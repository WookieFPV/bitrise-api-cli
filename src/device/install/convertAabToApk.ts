import fs from "node:fs/promises";
import path from "node:path";
import type { CommandFlags } from "@/cli/commands/download/impl";
import { createTempDir } from "@/helper/tempDir";
import { $ } from "zx";

export const convertAabToApk = async (aabPath: string, flags: CommandFlags) => {
    const startTime = Date.now();
    const tempDir = await createTempDir("bitrise-api-cli");
    const fileName = path.basename(aabPath, ".aab");
    const outPath = path.join(tempDir, `${fileName}.apks`);
    const zipPath = path.join(tempDir, `${fileName}.zip`);

    await $`bundletool build-apks --connected-device --bundle=${fileName}.aab --output=${outPath}`;
    await fs.rename(outPath, zipPath);
    await $`unzip -o ${zipPath} -d ${tempDir}`;

    return { apkFolder: path.join(tempDir, "./splits"), duration: Date.now() - startTime };
};
