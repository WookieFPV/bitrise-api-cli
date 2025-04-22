import { apiBuildArtifact } from "@/bitrise/api";
import { debugLog } from "@/helper/debugLog";
import { ensureMandatoryFields } from "@/helper/ensureMandatoryFields";
import { ENV } from "./env";

export const fetchArtifact = async ({ artifactSlug, buildSlug }: { buildSlug: string; artifactSlug: string }) => {
    const { data } = await apiBuildArtifact.artifactShow({ appSlug: ENV.appSlug, artifactSlug, buildSlug });

    if (!data) throw new Error("buildArtifact().artifactShow returned no data");
    if (ENV.debug) debugLog("artifact", data);

    return ensureMandatoryFields(data, ["expiringDownloadUrl"]);
};
