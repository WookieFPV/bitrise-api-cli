import { api } from "@/bitrise/api";
import { ENV } from "@/bitrise/env";
import { debugLog } from "@/helper/debugLog";
import { ensureMandatoryFields } from "@/helper/ensureMandatoryFields";

export const getAllBuilds = async () => {
    const { data } = await api.builds().buildList({ appSlug: ENV.appSlug, status: 1 });
    if (!data) throw Error("no build data");
    return data;
};

export const getLatestBuild = async () => {
    const builds = await getAllBuilds();

    const latestBuild = builds.find((build) => build.triggeredWorkflow === ENV.workflow);

    if (!latestBuild) throw `Found no build with the workflow: "${ENV.workflow}"`;

    if (ENV.debug) debugLog("latestBuild", latestBuild);

    return ensureMandatoryFields(latestBuild, ["slug"]);
};
