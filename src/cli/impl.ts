import type { ValidArtifactTypes } from "@/cliOptions.types";
import { downloadLatestArtifacts } from "@/downloadLatestArtifacts";
import type { LocalContext } from "./context";

export interface CommandFlags {
    readonly debug: boolean;
    readonly token: string;
    readonly workflow: string;
    readonly slug: string;
    readonly artifact: ValidArtifactTypes;
}

export default async function (this: LocalContext, flags: CommandFlags): Promise<void> {
    if (flags.debug) console.log(JSON.stringify(flags, null, 2));
    return downloadLatestArtifacts(flags);
}
