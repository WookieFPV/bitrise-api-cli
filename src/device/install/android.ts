import { exec } from "teen_process";

const adbPath = `${process.env.ANDROID_HOME}/platform-tools/adb`;

export const installApk = async (apkPath: string) => {
    const { stdout, stderr, code } = await exec(adbPath, ["install", "-r", "-d", apkPath]);
    if (code !== 0) {
        console.log(stderr);
        throw new Error(`Failed to install apk: ${stderr}`);
    }
};
