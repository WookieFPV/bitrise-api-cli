import { fetchArtifact } from "@/bitrise/fetchArtifact";
import { fetchArtifactByType } from "@/bitrise/fetchArtifactList";
import { getLatestBuild } from "@/bitrise/fetchBuilds";
import { formatBytes } from "@/helper/formatBytes";
import { oraPromise } from "ora";

import type { CommandFlags } from "@/cli/commands/download/impl";
import { downloadFile } from "@/helper/downloadFile";
import { getOraTexts } from "@/helper/oraHelper";

export const downloadLatestArtifacts = async (options: CommandFlags) => {
    const latestBuild = await oraPromise(getLatestBuild(), getOraTexts("fetching latest build"));

    const artifactMetadata = await oraPromise(
        fetchArtifactByType(latestBuild.slug),
        getOraTexts("fetching artifact list"),
    );

    const artifact = await oraPromise(
        fetchArtifact({ artifactSlug: artifactMetadata.slug, buildSlug: latestBuild.slug }),
        getOraTexts("fetching artifact metadata"),
    );

    const { file } = await oraPromise(downloadFile(artifact.expiringDownloadUrl, artifactMetadata.title), {
        ...getOraTexts("downloading apk file"),
        text: `downloading apk file [${formatBytes(artifact.fileSizeBytes ?? 0)}]`,
    });
    return file;
};
