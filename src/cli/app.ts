import { downloadCommand } from "@/cli/commands/download/command";
import { buildApplication, buildRouteMap } from "@stricli/core";
import { description, name, version } from "../../package.json";

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
