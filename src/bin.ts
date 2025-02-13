#!/usr/bin/env node
import { Command } from "commander";
import type { CliOptions } from "./cliOptions.types";
import { downloadLatestArtifacts } from "./downloadLatestArtifacts";

const program = new Command();

program.version(__VERSION__);

program
    .command("download")
    .option("-t, --token <TOKEN>", "bitrise api token (or $BITRISE_API_CLI_TOKEN)")
    .option("-w, --workflow <WORKFLOW_NAME>", "workflow to get apk from (or $BITRISE_API_CLI_WORKFLOW)")
    .option("-a, --app <APP_SLUG>", "bitrise app slug (or $BITRISE_APP_SLUG) see bitrise project url to get slug")
    .option("-d, --debug", "output extra debugging", false)
    .description("Download bitrise artifacts")
    .action((options: CliOptions) => downloadLatestArtifacts(options).catch(() => process.exit(1)));

program.parse(process.argv);
