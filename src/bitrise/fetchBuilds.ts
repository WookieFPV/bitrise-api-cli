import { api } from "@/bitrise/api";
import { ENV } from "@/bitrise/env";
import type { CliOptions } from "@/cliOptions.types";
import { debugLog } from "@/helper/debugLog";

export const getAllBuilds = async () => {
    const { data } = await api.builds().buildList({ appSlug: ENV.appSlug });
    if (!data) throw Error("no build data");
    return data;
};

export const getLatestBuild = async (options: CliOptions) => {
    const builds = await getAllBuilds();

    const latestBuild = builds.find((build) => build.triggeredWorkflow === ENV.workflow);

    if (!latestBuild) throw `Found no build with the workflow: "${ENV.workflow}"`;

    if (options.debug) debugLog("latestBuild", latestBuild);
    return latestBuild;
};
