import type { CommandFlags } from "@/cli/commands/download/impl";
import { installApk, installSplitApk } from "@/device/install/android";
import { convertAabToApk } from "@/device/install/convertAabToApk";
import { getOraTexts } from "@/helper/oraHelper";
import { oraPromise } from "ora";

export const installApp = async ({ file, flags }: { file: string; flags: CommandFlags }) => {
    if (flags.artifact === "android-apk" && file.endsWith(".aab")) {
        const { apkFolder } = await oraPromise(convertAabToApk(file, flags), getOraTexts("Convert AAB to Split APK"));
        await oraPromise(installSplitApk(apkFolder), getOraTexts("installing Split APK"));
    } else if (flags.artifact === "android-apk" && file.endsWith(".apk")) {
        await oraPromise(installApk(file), getOraTexts("installing APK"));
    } else if (flags.artifact === "android-apk") {
        throw Error("Artifact is not an APK or AAB file");
    } else {
        return console.log("Installing on iOS is not supported yet");
    }
};
