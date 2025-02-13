import { ENV } from "@/bitrise/env";
import { BuildArtifactApi, BuildsApi, Configuration } from "@/generated_api";

export const getApiConfig = () => new Configuration({ headers: { Authorization: ENV.token } });

export const api = {
    buildArtifact: () => new BuildArtifactApi(getApiConfig()),
    builds: () => new BuildsApi(getApiConfig()),
};
