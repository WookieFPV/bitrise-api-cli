import { $ } from "zx";

const adbPath = `${process.env.ANDROID_HOME}/platform-tools/adb`;

export const installApk = async (apkPath: string) => {
    const { duration } = await $`${adbPath} install -r -d ${apkPath}`;
    return { duration };
};

export const installSplitApk = async (apkFolder: string) => {
    const { duration } = await $`${adbPath} install-multiple -r -d ${apkFolder}/*`;
    return { duration };
};
