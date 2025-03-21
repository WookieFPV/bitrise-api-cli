import type { CommandFlags } from "@/cli/commands/download/impl";
import { type ValidArtifactTypes, validArtifactTypes } from "@/cliOptions.types";

export const ENV = {
    debug: false,
    appSlug: "",
    token: "",
    workflow: "",
    artifactType: "android-apk" as ValidArtifactTypes,
};

const saveOptions = (options: CommandFlags) => {
    ENV.debug = options.debug;
    ENV.appSlug = options.slug;
    ENV.token = options.token;
    ENV.workflow = options.workflow;
    ENV.artifactType = options.artifact;
};

const isEnvValid = () => {
    if (ENV.appSlug.length < 1) {
        console.log("No app slug provided! (see --help for more information)");
        return false;
    }
    if (ENV.token?.length < 1) {
        console.log("No token provided! (see --help for more information)");
        return false;
    }
    if (ENV.workflow?.length < 1) {
        console.log("No workflow provided! (see --help for more information)");
        return false;
    }
    if (!validArtifactTypes.includes(ENV.artifactType)) {
        console.log(`Invalid artifact type "${ENV.artifactType}"! (see --help for more information)`);
        return false;
    }
    return true;
};

export const setupEnv = (flags: CommandFlags): boolean => {
    if (flags.debug) console.log(JSON.stringify(flags, null, 2));
    saveOptions(flags);
    return isEnvValid();
};
