import fs from "node:fs/promises";
import path from "node:path";
import { getOraTexts } from "@/helper/oraHelper";
import { createTempDir } from "@/helper/tempDir";
import { tryCatch } from "@/helper/tryCatch";
import { oraPromise } from "ora";
import { $, which } from "zx";

type BundletoolType = { type: "jar" | "global"; path: string; duration?: number };

/**
 * Returns Path to bundletool
 * Will temporary install bundletool if not already installed.
 */
export const getOrInstallBundletool = async (): Promise<BundletoolType> => {
    const bundletoolPath = await which("bundletool", { nothrow: true });
    if (bundletoolPath) return { type: "global", path: bundletoolPath };

    const jarInfo = await getBundleToolJar();
    if (jarInfo) return jarInfo;

    return oraPromise(installBundleTool(), getOraTexts("Downloading bundletool jar (if not installed)"));
};

const bundletoolVersion = "1.18.1";
const bundletoolData = {
    version: bundletoolVersion,
    filename: `bundletool-all-${bundletoolVersion}.jar`,
    url: `https://github.com/google/bundletool/releases/download/${bundletoolVersion}/bundletool-all-${bundletoolVersion}.jar`,
};

const getBundletoolTmpJarPath = async () => {
    const bundletoolPath = await createTempDir("bitrise-api-cli", "bundletool");
    return path.join(bundletoolPath, bundletoolData.filename);
};

const $$ = $({ quiet: true });

const getBundleToolJar = async (): Promise<BundletoolType | false> => {
    const jarPath = await getBundletoolTmpJarPath();

    const { error } = await tryCatch(fs.access(jarPath));
    if (!error) return { type: "jar", path: jarPath };
    return false;
};

const installBundleTool = async (): Promise<BundletoolType> => {
    const jarPath = await getBundletoolTmpJarPath();

    const { duration } = await $$`curl -L ${bundletoolData.url} -o ${jarPath}`;
    await $`java -jar ${jarPath} version`;

    return { type: "jar", path: jarPath, duration };
};
