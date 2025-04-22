import { ENV } from "@/bitrise/env";
import { Configuration } from "@/generated_api/runtime";

import { BuildArtifactApi } from "@/generated_api/apis/BuildArtifactApi";
import { BuildsApi } from "@/generated_api/apis/BuildsApi";

export const apiConfig = new Configuration({ apiKey: () => ENV.token });

export const apiBuildArtifact = new BuildArtifactApi(apiConfig);
export const apiBuilds = new BuildsApi(apiConfig);

/* Remove unused export to reduce bundle size:

export const apiActivity = new ActivityApi(apiConfig)
export const apiAppleApiCredentials = new AppleApiCredentialsApi(apiConfig)
export const apiBuildRequest = new BuildRequestApi(apiConfig)
export const apiGroups = new GroupsApi(apiConfig)
export const apiPipelines = new PipelinesApi(apiConfig)
export const apiUser = new UserApi(apiConfig)
export const apiAddons = new AddonsApi(apiConfig)
export const apiApplication = new ApplicationApi(apiConfig)

export const apiKeyValueCache = new KeyValueCacheApi(apiConfig)
export const apiProvisioningProfile = new ProvisioningProfileApi(apiConfig)
export const apiWebhookDeliveryItem = new WebhookDeliveryItemApi(apiConfig)
export const apiAndroidKeystoreFile = new AndroidKeystoreFileApi(apiConfig)

export const apiGenericProjectFile = new GenericProjectFileApi(apiConfig)
export const apiOrganizations = new OrganizationsApi(apiConfig)
export const apiSecrets = new SecretsApi(apiConfig)
export const apiAppSetup = new AppSetupApi(apiConfig)
export const apiBuildCertificate = new BuildCertificateApi(apiConfig)
export const apiGoogleServiceCredentials = new GoogleServiceCredentialsApi(apiConfig)
export const apiOutgoingWebhook = new OutgoingWebhookApi(apiConfig)
export const apiTestDevices = new TestDevicesApi(apiConfig)
*/
