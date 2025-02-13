export type CliOptions = {
    debug: boolean;
    token: string;
    workflow: string;
    slug: string;
    artifact: ValidArtifactTypes;
};

export const validArtifactTypes = ["android-apk", "ios-ipa"] as const;
export type ValidArtifactTypes = (typeof validArtifactTypes)[number];
