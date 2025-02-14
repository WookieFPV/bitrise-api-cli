import { type CliOptions, type ValidArtifactTypes, validArtifactTypes } from "@/cliOptions.types";

export const ENV = {
    debug: false,
    appSlug: "",
    token: "",
    workflow: "",
    artifactType: "android-apk" as ValidArtifactTypes,
};

export const saveOptions = (options: CliOptions) => {
    ENV.debug = options.debug;
    ENV.appSlug = options.slug;
    ENV.token = options.token;
    ENV.workflow = options.workflow;
    ENV.artifactType = options.artifact;
};

export const isEnvValid = () => {
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
