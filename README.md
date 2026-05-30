# bitrise-api-cli [![npm][npm-image]][npm-url] ![npm][npm-dl-stats]

Download the latest Bitrise build artifact for a workflow without clicking through the UI.

`bitrise-api-cli` is an unofficial Bitrise CLI focused on one job: find the latest successful build for a workflow, pick the matching artifact, and download it locally.

## Quick Start

```bash
npx bitrise-api-cli@latest download \
  --token <BITRISE_TOKEN> \
  --workflow <WORKFLOW_NAME> \
  --slug <APP_SLUG>
```

## What It Can Download

- `android-apk` artifacts (default)
- `ios-ipa` artifacts

For Android artifacts you can also install the downloaded file immediately:

```bash
npx bitrise-api-cli@latest download \
  --artifact android-apk \
  --install \
  --token <BITRISE_TOKEN> \
  --workflow android-release \
  --slug <APP_SLUG>
```

## Configuration

You can combine command flags, environment variables, and `.bitrise.json`.

### Environment Variables

- `BITRISE_API_CLI_TOKEN`
- `BITRISE_API_CLI_WORKFLOW`
- `BITRISE_APP_SLUG`

`BITRISE_APP_SLUG` is usually available automatically in Bitrise CI.

### `.bitrise.json`

```json
{
  "token": "your-bitrise-token",
  "slug": "your-app-slug",
  "workflow": "your-workflow-name"
}
```

## Main Flags

- `--token <token>`: Bitrise API token
- `--workflow <name>`: workflow whose latest successful build should be used
- `--slug <app-slug>`: Bitrise app slug
- `--artifact <android-apk|ios-ipa>`: artifact type to download
- `--install`: install the downloaded Android artifact locally
- `--debug`: print extra request and resolution details

## CI Example

```yaml
steps:
  - script:
      inputs:
        content: |
          npx bitrise-api-cli@latest download \
            --workflow android-release \
            --token "$BITRISE_API_CLI_TOKEN"
```

[npm-image]: https://img.shields.io/npm/v/bitrise-api-cli
[npm-url]: https://www.npmjs.com/package/bitrise-api-cli
[npm-dl-stats]: https://img.shields.io/npm/dm/bitrise-api-cli
