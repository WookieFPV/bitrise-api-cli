import { buildCommand } from "@stricli/core";
import { validArtifactTypes } from "@/cliOptions.types";
import { readConfig } from "@/config/readConfig";

export const downloadCommand = buildCommand({
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
                default: process.env["BITRISE_APP_SLUG"] ?? readConfig().slug,
                parse: String,
                placeholder: "APP_SLUG",
            },
            token: {
                kind: "parsed",
                brief: "bitrise api token (or $BITRISE_API_CLI_TOKEN)",
                default: process.env["BITRISE_API_CLI_TOKEN"] ?? readConfig().token,
                parse: String,
                placeholder: "API_TOKEN",
            },
            workflow: {
                kind: "parsed",
                brief: "workflow to get apk from (or $BITRISE_API_CLI_WORKFLOW)",
                default: process.env["BITRISE_API_CLI_WORKFLOW"] ?? readConfig().workflow,
                parse: String,
                placeholder: "WORKFLOW_NAME",
            },
            install: {
                kind: "boolean",
                brief: "Install the downloaded apk/aab artifact [android only]",
                default: false,
            },
        },
        aliases: {
            a: "artifact",
            d: "debug",
            s: "slug",
            t: "token",
            w: "workflow",
            i: "install",
        },
    },
    docs: {
        brief: "Download bitrise artifacts. Most parameters can be set via environment variables.",
    },
});
