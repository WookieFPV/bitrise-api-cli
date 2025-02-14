import { validArtifactTypes } from "@/cliOptions.types";
import { buildApplication, buildCommand, buildRouteMap } from "@stricli/core";
import { description, name, version } from "../../package.json";

const downloadCommand = buildCommand({
    loader: async () => import("./impl"),
    parameters: {
        flags: {
            artifact: {
                kind: "enum",
                brief: 'bitrise artifact type "ios-ipa" or "android-apk"',
                default: "android-apk",
                values: validArtifactTypes,
            },
            debug: {
                kind: "boolean",
                brief: "Number of times to say hello",
                default: false,
            },
            slug: {
                kind: "parsed",
                brief: "bitrise app slug (or $BITRISE_APP_SLUG) see bitrise project url to get slug",
                default: process.env["BITRISE_APP_SLUG"],
                parse: String,
                placeholder: "APP_SLUG",
            },
            token: {
                kind: "parsed",
                brief: "bitrise api token (or $BITRISE_API_CLI_TOKEN)",
                default: process.env["BITRISE_API_CLI_TOKEN"],
                parse: String,
                placeholder: "API_TOKEN",
            },
            workflow: {
                kind: "parsed",
                brief: "workflow to get apk from (or $BITRISE_API_CLI_WORKFLOW)",
                default: process.env["BITRISE_API_CLI_WORKFLOW"],
                parse: String,
                placeholder: "WORKFLOW_NAME",
            },
        },
        aliases: {
            a: "artifact",
            d: "debug",
            s: "slug",
            t: "token",
            w: "workflow",
        },
    },
    docs: {
        brief: "Download bitrise artifacts. Most parameters can be set via environment variables.",
    },
});

const root = buildRouteMap({
    routes: {
        download: downloadCommand,
    },
    docs: {
        brief: description,
    },
});

export const app = buildApplication(root, {
    name,
    versionInfo: {
        currentVersion: version,
    },
});
