import { exec } from "teen_process";

const adbPath = `${process.env.ANDROID_HOME}/platform-tools/adb`;

export const installApk = async (apkPath: string) => {
    const startTime = Date.now();
    try {
        const { code } = await exec(adbPath, ["install", "-r", "-d", apkPath]);
        if (code !== 0) throw new Error(`Failed to install apk error code: ${code}`);
        return { duration: Date.now() - startTime };
    } catch (e) {
        if (e instanceof Error && "stderr" in e) throw new Error(`${e.stderr}`);
        throw new Error("unknown Error");
    }
};

export const installSplitApk = async (apkFolder: string) => {
    const startTime = Date.now();
    try {
        const { code } = await exec(adbPath, ["install-multiple", "-r", "-d", `${apkFolder}/*`], {
            shell: true,
        });
        if (code !== 0) throw new Error(`Failed to install split apk error code: ${code}`);
        return { duration: Date.now() - startTime };
    } catch (e) {
        if (e instanceof Error && "stderr" in e) throw new Error(`${e.stderr}`);
        throw new Error("unknown Error");
    }
};
