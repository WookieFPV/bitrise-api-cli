import type { CommandFlags } from "@/cli/commands/download/impl";
import { installApk } from "@/device/install/android";
import { getOraTexts } from "@/helper/oraHelper";
import { oraPromise } from "ora";

export const installApp = async ({ file, flags }: { file: string; flags: CommandFlags }) => {
    if (flags.artifact === "android-apk") {
        if (!file.endsWith(".apk")) return console.log("Artifact is not an APK file");
        await oraPromise(installApk(file), getOraTexts("installing APK"));
    } else {
        return console.log("Installing on iOS is not supported yet");
    }
};
