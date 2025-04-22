import { cosmiconfigSync } from "cosmiconfig";

const explorer = cosmiconfigSync("bitrise", {
    searchPlaces: [".bitrise.json"],
});

export const readConfig = () => {
    const data: Record<string, string | undefined> = explorer.search()?.config ?? {};
    return {
        token: data.token,
        slug: data.slug,
        workflow: data.workflow,
    };
};
