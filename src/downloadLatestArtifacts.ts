import { fetchArtifact } from "@/bitrise/fetchArtifact";
import { formatBytes } from "@/helper/formatBytes";
import { oraPromise } from "ora";
import { isEnvValid, saveOptions } from "./bitrise/env";
import { fetchArtifactByType } from "./bitrise/fetchArtifactList";
import { getLatestBuild } from "./bitrise/fetchBuilds";
import type { CliOptions } from "./cliOptions.types";
import { debugLog } from "./helper/debugLog";
import { downloadFile } from "./helper/downloadFile";

export const downloadLatestArtifacts = async (options: CliOptions) => {
    saveOptions(options);
    if (!isEnvValid()) return process.exit(1);

    const latestBuild = await oraPromise(getLatestBuild(options), {
        text: "fetching latest build",
        failText: (error) => `fetching latest build failed with error: ${error}`,
    });

    if (!latestBuild.slug) {
        console.log("Latest build contained no Slug");
        return process.exit(1);
    }
    const artifactMetadata = await oraPromise(fetchArtifactByType(latestBuild.slug), {
        text: "fetching artifact list",
        failText: (error) => `fetching artifact list failed with error: ${error}`,
    });
    if (options.debug) debugLog("artifactMetadata", artifactMetadata);
    if (!artifactMetadata || !artifactMetadata.slug) return process.exit(1);

    const artifact = await oraPromise(
        fetchArtifact({
            artifactSlug: artifactMetadata.slug,
            buildSlug: latestBuild.slug,
        }),
        { text: "fetching artifact metadata" },
    );
    if (options.debug) debugLog("artifact", artifact);

    if (!artifact || !artifact.expiringDownloadUrl || !artifactMetadata.title) {
        console.log("Artifact is missing data");
        return process.exit(1);
    }

    const fileSize = formatBytes(artifact.fileSizeBytes ?? 0);
    await oraPromise(downloadFile(artifact.expiringDownloadUrl, artifactMetadata.title), {
        text: `downloading apk file (${fileSize})`,
    });
};
