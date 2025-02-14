import { api } from "@/bitrise/api";
import { debugLog } from "@/helper/debugLog";
import { ENV } from "./env";

export const fetchArtifact = async ({ artifactSlug, buildSlug }: { buildSlug: string; artifactSlug: string }) => {
    const { data } = await api.buildArtifact().artifactShow({ appSlug: ENV.appSlug, artifactSlug, buildSlug });

    if (!data) throw new Error("buildArtifact().artifactShow returned no data");
    if (ENV.debug) debugLog("artifact", data);
    return data;
};
