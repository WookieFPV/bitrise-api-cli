//version is injected by tsup when bundling
declare const __VERSION__: string;

declare namespace NodeJS {
    interface ProcessEnv {
        BITRISE_APP_SLUG: string | undefined;
        BITRISE_API_CLI_TOKEN: string | undefined;
        BITRISE_API_CLI_WORKFLOW: string | undefined;
    }
}
