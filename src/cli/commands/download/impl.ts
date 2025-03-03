import { setupEnv } from "@/bitrise/env";
import type { ValidArtifactTypes } from "@/cliOptions.types";
import { installApp } from "@/device/install/run";
import { downloadLatestArtifacts } from "@/downloadLatestArtifacts";
import type { LocalContext } from "../../context";

export interface CommandFlags {
    readonly debug: boolean;
    readonly token: string;
    readonly workflow: string;
    readonly slug: string;
    readonly install: boolean;
    readonly artifact: ValidArtifactTypes;
}

export default async function (this: LocalContext, flags: CommandFlags): Promise<void> {
    if (!setupEnv(flags)) return process.exit(1);

    const file = await downloadLatestArtifacts(flags);
    if (flags.install) {
        await installApp({ file, flags }).catch(() => {});
    }
}
