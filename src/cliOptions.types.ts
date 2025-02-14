export const validArtifactTypes = ["android-apk", "ios-ipa"] as const;
export type ValidArtifactTypes = (typeof validArtifactTypes)[number];
