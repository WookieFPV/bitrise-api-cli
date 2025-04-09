import { api } from "@/bitrise/api";
import { debugLog } from "@/helper/debugLog";
import { ensureMandatoryFields } from "@/helper/ensureMandatoryFields";
import { ENV } from "./env";

export const fetchArtifactList = async (buildSlug: string) => {
    const { data } = await api.buildArtifact.artifactList({ appSlug: ENV.appSlug, buildSlug });
    if (!data) throw new Error("buildArtifact().artifactList returned no data");
    return data;
};

export const fetchArtifactByType = async (buildSlug: string) => {
    const artifactInfo = await fetchArtifactList(buildSlug);
    const artifactMetadata = artifactInfo.find((artifact) => artifact.artifactType === ENV.artifactType);
    if (ENV.debug) debugLog("artifactMetadata", artifactMetadata);

    if (!artifactMetadata) throw new Error(`Found no ${ENV.artifactType} in build Slug: ${buildSlug}`);
    return ensureMandatoryFields(artifactMetadata, ["slug", "title"]);
};
