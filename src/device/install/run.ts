import type { CommandFlags } from "@/cli/commands/download/impl";
import { installApk } from "@/device/install/android";
import { oraPromise } from "ora";

export const installApp = async ({ file, flags }: { file: string; flags: CommandFlags }) => {
    if (flags.artifact === "android-apk") {
        if (!file.endsWith(".apk")) return console.log("Artifact is not an APK file");
        await oraPromise(installApk(file), {
            text: "installing APK",
            failText: (error) => `installing APK failed with error: ${error}`,
        });
    } else {
        return console.log("Installing on iOS is not supported yet");
    }
};
