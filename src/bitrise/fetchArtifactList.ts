import { api } from "@/bitrise/api";
import { debugLog } from "@/helper/debugLog";
import { ENV } from "./env";

export const fetchArtifactList = async (buildSlug: string) => {
    const { data } = await api.buildArtifact().artifactList({ appSlug: ENV.appSlug, buildSlug });
    if (!data) throw new Error("buildArtifact().artifactList returned no data");
    return data;
};

export const fetchArtifactByType = async (buildSlug: string) => {
    const artifactInfo = await fetchArtifactList(buildSlug);
    const artifactMetadata = artifactInfo.find((artifact) => artifact.artifactType === ENV.artifactType);
    if (!artifactMetadata || !artifactMetadata.slug)
        throw new Error(`Found no ${ENV.artifactType} in build Slug: ${buildSlug}`);
    if (ENV.debug) debugLog("artifactMetadata", artifactMetadata);
    return artifactMetadata;
};
