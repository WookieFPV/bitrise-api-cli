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

export const apiConfig = new Configuration({ apiKey: () => ENV.token });

/**
 * For each API, we create a new instance of the API class with the configuration. (This has some unnecessary overhead, but it is the simplest way to do it.)
 */
export const api = {
    activity: new ActivityApi(apiConfig),
    appleApiCredentials: new AppleApiCredentialsApi(apiConfig),
    buildRequest: new BuildRequestApi(apiConfig),
    groups: new GroupsApi(apiConfig),
    pipelines: new PipelinesApi(apiConfig),
    user: new UserApi(apiConfig),
    addons: new AddonsApi(apiConfig),
    application: new ApplicationApi(apiConfig),
    builds: new BuildsApi(apiConfig),
    keyValueCache: new KeyValueCacheApi(apiConfig),
    provisioningProfile: new ProvisioningProfileApi(apiConfig),
    webhookDeliveryItem: new WebhookDeliveryItemApi(apiConfig),
    androidKeystoreFile: new AndroidKeystoreFileApi(apiConfig),
    buildArtifact: new BuildArtifactApi(apiConfig),
    genericProjectFile: new GenericProjectFileApi(apiConfig),
    organizations: new OrganizationsApi(apiConfig),
    secrets: new SecretsApi(apiConfig),
    appSetup: new AppSetupApi(apiConfig),
    buildCertificate: new BuildCertificateApi(apiConfig),
    googleServiceCredentials: new GoogleServiceCredentialsApi(apiConfig),
    outgoingWebhook: new OutgoingWebhookApi(apiConfig),
    testDevices: new TestDevicesApi(apiConfig),
};
