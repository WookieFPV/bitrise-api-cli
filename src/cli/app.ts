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
        getLatestVersion: async () => {
            const response = await fetch(`https://registry.npmjs.org/${name}/latest`);
            if (!response.ok) throw new Error(`Failed to fetch the latest version of ${name}`);
            const data = await response.json();
            if (!data || typeof data !== "object" || !("version" in data) || typeof data.version !== "string")
                throw new Error(`Failed to parse the latest version of ${name}`);
            return data.version;
        },
        upgradeCommand: `npx ${name}@latest`,
    },
});
