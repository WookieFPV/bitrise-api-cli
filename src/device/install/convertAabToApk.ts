import fs from "node:fs/promises";
import path from "node:path";
import type { CommandFlags } from "@/cli/commands/download/impl";
import { createTempDir } from "@/helper/tempDir";
import { exec } from "teen_process";

export const convertAabToApk = async (aabPath: string, flags: CommandFlags) => {
    const startTime = Date.now();
    try {
        const tempDir = await createTempDir("bitrise-api-cli");
        const fileName = path.basename(aabPath, ".aab");
        const outPath = path.join(tempDir, `${fileName}.apks`);
        const zipPath = path.join(tempDir, `${fileName}.zip`);

        const args = ["build-apks", "--connected-device", `--bundle=${fileName}.aab`, `--output=${outPath}`];

        if (flags.debug) console.log("run command:", "bundletool", args.join(" "));

        const { code } = await exec("bundletool", args);
        if (flags.debug) console.log("run command:", "bundletool:", code);
        if (code !== 0) throw new Error(`Failed to convert aab to apk: ${code}`);

        await fs.rename(outPath, zipPath);
        if (flags.debug) console.log(`fs.rename(${outPath}, ${zipPath}) done`);

        const { code: code2 } = await exec("unzip", ["-o", zipPath, "-d", tempDir]);
        if (flags.debug) console.log(`done unzip: ${JSON.stringify({ zipPath, tempDir })}`);
        if (code2 !== 0) throw new Error(`Failed to unzip ${code2}`);

        return { apkFolder: path.join(tempDir, "./splits"), duration: Date.now() - startTime };
    } catch (e) {
        if (e instanceof Error && "stderr" in e) throw new Error(`${e.stderr}`);
        throw new Error("unknown Error");
    }
};
