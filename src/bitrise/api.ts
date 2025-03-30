import { ENV } from "@/bitrise/env";
import {
    ActivityApi,
    AddonsApi,
    AndroidKeystoreFileApi,
    AppSetupApi,
    AppleApiCredentialsApi,
    ApplicationApi,
    BuildArtifactApi,
    BuildCertificateApi,
    BuildRequestApi,
    BuildsApi,
    Configuration,
    GenericProjectFileApi,
    GoogleServiceCredentialsApi,
    GroupsApi,
    KeyValueCacheApi,
    OrganizationsApi,
    OutgoingWebhookApi,
    PipelinesApi,
    ProvisioningProfileApi,
    SecretsApi,
    TestDevicesApi,
    UserApi,
    WebhookDeliveryItemApi,
} from "@/generated_api";

export const getApiConfig = () => new Configuration({ headers: { Authorization: ENV.token } });

/**
 * For each API, we create a new instance of the API class with the configuration. (This has some unnecessary overhead, but it is the simplest way to do it.)
 */
export const api = {
    activity: () => new ActivityApi(getApiConfig()),
    appleApiCredentials: () => new AppleApiCredentialsApi(getApiConfig()),
    buildRequest: () => new BuildRequestApi(getApiConfig()),
    groups: () => new GroupsApi(getApiConfig()),
    pipelines: () => new PipelinesApi(getApiConfig()),
    user: () => new UserApi(getApiConfig()),
    addons: () => new AddonsApi(getApiConfig()),
    application: () => new ApplicationApi(getApiConfig()),
    builds: () => new BuildsApi(getApiConfig()),
    keyValueCache: () => new KeyValueCacheApi(getApiConfig()),
    provisioningProfile: () => new ProvisioningProfileApi(getApiConfig()),
    webhookDeliveryItem: () => new WebhookDeliveryItemApi(getApiConfig()),
    androidKeystoreFile: () => new AndroidKeystoreFileApi(getApiConfig()),
    buildArtifact: () => new BuildArtifactApi(getApiConfig()),
    genericProjectFile: () => new GenericProjectFileApi(getApiConfig()),
    organizations: () => new OrganizationsApi(getApiConfig()),
    secrets: () => new SecretsApi(getApiConfig()),
    appSetup: () => new AppSetupApi(getApiConfig()),
    buildCertificate: () => new BuildCertificateApi(getApiConfig()),
    googleServiceCredentials: () => new GoogleServiceCredentialsApi(getApiConfig()),
    outgoingWebhook: () => new OutgoingWebhookApi(getApiConfig()),
    testDevices: () => new TestDevicesApi(getApiConfig()),
};
