import type { CliOptions } from "@/cliOptions.types";

export const ENV = {
    appSlug: process.env.BITRISE_APP_SLUG ?? "",
    token: "",
    workflow: "",
};

export const saveOptions = (options: CliOptions) => {
    ENV.token = options?.token ?? process.env.BITRISE_API_CLI_TOKEN ?? "";
    ENV.workflow = options?.workflow ?? process.env.BITRISE_API_CLI_WORKFLOW ?? "";
};

export const isEnvValid = () => {
    if (ENV.appSlug.length < 1) {
        console.log("No AppSlug provided! (use $BITRISE_APP_SLUG env variable)");
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
