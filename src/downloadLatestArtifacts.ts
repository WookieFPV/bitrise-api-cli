import { oraPromise } from "ora";
import { fetchArtifact } from "@/bitrise/fetchArtifact";
import { fetchArtifactByType } from "@/bitrise/fetchArtifactList";
import { getLatestBuild } from "@/bitrise/fetchBuilds";
import type { CommandFlags } from "@/cli/commands/download/impl";
import { downloadFile } from "@/helper/downloadFile";
import { formatBytes } from "@/helper/formatBytes";
import { getOraTexts } from "@/helper/oraHelper";

export const downloadLatestArtifacts = async (_options: CommandFlags) => {
    const latestBuild = await oraPromise(getLatestBuild(), getOraTexts("fetching latest build"));

    const artifactMetadata = await oraPromise(
        fetchArtifactByType(latestBuild.slug),
        getOraTexts("fetching artifact list"),
    );

    const artifact = await oraPromise(
        fetchArtifact({ artifactSlug: artifactMetadata.slug, buildSlug: latestBuild.slug }),
        getOraTexts("fetching artifact metadata"),
    );

    const fileType = artifact.title?.split(".").pop() ?? "unknown";

    const { file } = await oraPromise(downloadFile(artifact.expiringDownloadUrl, artifactMetadata.title), {
        ...getOraTexts(`downloading ${fileType} file`),
        text: `downloading ${fileType} file [${formatBytes(artifact.fileSizeBytes ?? 0)}]`,
    });
    return file;
};
