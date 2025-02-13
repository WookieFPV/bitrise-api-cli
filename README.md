# bitrise_api_cli

Unofficial CLI to download artifacts from bitrise.
This is used to download apk instead of building from source each time.

## Usage

```bash
npx bitrise-api-cli@latest download --token <BITRISE_TOKEN> --workflow <WORKFLOW_NAME>

Usage: bitrise-api-cli download [options]

Download bitrise artifacts

Options:
  -t, --token <TOKEN>             bitrise api token (or $BITRISE_API_CLI_TOKEN)
  -w, --workflow <WORKFLOW_NAME>  workflow to get apk from (or $BITRISE_API_CLI_WORKFLOW)
  -d, --debug                     output extra debugging (default: false)
  -h, --help                      display help for command

```
