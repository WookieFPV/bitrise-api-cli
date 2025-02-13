# Bitrise API CLI [![npm version](https://badge.fury.io/js/bitrise-api-cli.svg)](https://www.npmjs.com/package/bitrise-api-cli)

<div align="center">
🚀 An unofficial CLI tool to interact with Bitrise API, making artifact downloads a breeze.
</div>

## 🎯 Features

- Download artifacts from your latest successful builds
- Simple workflow-based artifact retrieval
- Easy integration with CI/CD pipelines
- Zero configuration needed

## 🚀 Quick Start

### Download Command

Downloads artifacts from the latest successful build of a specified workflow.

```bash
# Download artifacts from a specific workflow
npx bitrise-api-cli@latest download --token <BITRISE_TOKEN> --workflow <WORKFLOW_NAME>
```

## 🔐 Environment Variables

You can set the following environment variables instead of passing command-line arguments:

- `BITRISE_API_CLI_TOKEN`: Your Bitrise API token
- `BITRISE_API_CLI_WORKFLOW`: workflow name
- `BITRISE_APP_SLUG`: App Slug (already set in Bitrise CI, must be set if running locally)

## 💡 Examples

```bash
# Using command line arguments
npx bitrise-api-cli@latest download --token abc123 --workflow android-release

# Using environment variables
export BITRISE_API_CLI_TOKEN=abc123
export BITRISE_API_CLI_WORKFLOW=android-release
npx bitrise-api-cli@latest download
```

## 📝 License

This project is [MIT](LICENSE) licensed.

## 🙏 Acknowledgments

- Thanks to [Bitrise](https://www.bitrise.io/) for their excellent API
- Built with ❤️ for the mobile CI/CD community
