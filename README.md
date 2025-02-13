# Bitrise API CLI [![npm version](https://badge.fury.io/js/bitrise-api-cli.svg)](https://www.npmjs.com/package/bitrise-api-cli)

<div align="center">
🚀 An unofficial CLI tool to interact with Bitrise API, making artifact downloads a breeze.
</div>

## 🎯 Features

- Download artifacts from your latest successful builds
- Simple workflow-based artifact retrieval
- Easy integration with CI/CD pipelines
- Supports both CLI arguments and environment variables

## 🚀 Quick Start

### Download Artifacts

```bash
# Using npx (recommended)
npx bitrise-api-cli@latest download --token <BITRISE_TOKEN> --workflow <WORKFLOW_NAME>

# If running locally, you'll need to specify the app slug
npx bitrise-api-cli@latest download \
  --token <BITRISE_TOKEN> \
  --workflow <WORKFLOW_NAME> \
  --slug <APP_SLUG>
```

## 🔐 Configuration

### Environment Variables

| Variable                   | Description                              | Required     |
| -------------------------- | ---------------------------------------- |--------------|
| `BITRISE_API_CLI_TOKEN`    | Your Bitrise API token                   | Yes          |
| `BITRISE_API_CLI_WORKFLOW` | Workflow name to download artifacts from | Yes          |
| `BITRISE_APP_SLUG`         | App Slug (auto-set in Bitrise CI)        | only locally |

### CLI Options

```bash
Options:
  -t, --token <TOKEN>             bitrise api token (or $BITRISE_API_CLI_TOKEN)
  -w, --workflow <WORKFLOW_NAME>  workflow to get apk from (or $BITRISE_API_CLI_WORKFLOW)
  -s, --slug <APP_SLUG>           bitrise app slug (or $BITRISE_APP_SLUG) see bitrise project url to get slug
  -a, --artifact <ARTIFACT_TYPE>  bitrise artifact type "ios-ipa" or "android-apk"
  -d, --debug                     output extra debugging (default: false)
  -h, --help                      display help for command
```

## 💡 Examples

### Using Command Line Arguments

```bash
# Download artifacts from a specific workflow
npx bitrise-api-cli@latest download \
  --token abc123 \
  --workflow android-release \
  --slug a1b2c3d4e5f6

# Enable debug logging
npx bitrise-api-cli@latest download --debug \
  --token abc123 \
  --workflow android-release
```

### Using Environment Variables

```bash
# Set environment variables
export BITRISE_API_CLI_TOKEN=abc123
export BITRISE_API_CLI_WORKFLOW=android-release
export BITRISE_APP_SLUG=a1b2c3d4e5f6

# Run the command
npx bitrise-api-cli@latest download
```

## 🔍 Common Use Cases

### CI/CD Integration

Perfect for downloading artifacts from previous builds instead of rebuilding from source:

```yaml
steps:
  - script:
      inputs:
        content: |
          npx bitrise-api-cli download \
            --workflow android-release \
            --token $BITRISE_API_TOKEN
```

### Local Development

Download the latest artifacts to test without building:

```bash
npx bitrise-api-cli@latest download \
  --token $BITRISE_API_TOKEN \
  --workflow android-release \
  --slug $BITRISE_APP_SLUG
```

## 📝 License

This project is [MIT](LICENSE) licensed.

## 🙏 Acknowledgments

- Thanks to [Bitrise](https://www.bitrise.io/) for their excellent API
- Built with ❤️ for the mobile CI/CD community

---

<div align="center">
<p>Found this project useful? Give it a ⭐️!</p>
</div>
