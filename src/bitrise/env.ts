import type { CliOptions } from "@/cliOptions.types";

export const ENV = {
    appSlug: "",
    token: "",
    workflow: "",
};

export const saveOptions = (options: CliOptions) => {
    ENV.appSlug = options?.appSlug ?? process.env.BITRISE_APP_SLUG ?? "";
    ENV.token = options?.token ?? process.env.BITRISE_API_CLI_TOKEN ?? "";
    ENV.workflow = options?.workflow ?? process.env.BITRISE_API_CLI_WORKFLOW ?? "";
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
    return true;
};
