# Bitrise API CLI [![npm][npm-image]][npm-url] ![npm][npm-dl-stats]

🚀 An unofficial CLI tool for Bitrise API artifact downloads.

## 🎯 Features

- Download artifacts from successful builds
- Workflow-based retrieval
- CI/CD integration

## 🚀 Quick Start

### Download Artifacts

```bash
npx bitrise-api-cli@latest download --token <BITRISE_TOKEN> --workflow <WORKFLOW_NAME> [--slug <APP_SLUG>]
```

## 🔐 Configuration

You can combine command-line flags, environment variables, and file-based configuration.

### Environment Variables

- `BITRISE_API_CLI_TOKEN`
- `BITRISE_API_CLI_WORKFLOW`
- `BITRISE_APP_SLUG` App Slug (auto-set in Bitrise CI)

### File-Based Configuration

The `.bitrise.json` file can be placed in your project root or home directory.

```json
{
  "token": "your-bitrise-token",
  "slug": "your-app-slug",
  "workflow": "your-workflow-name"
}
```

## 💡 Examples

### Command Line

```bash
npx bitrise-api-cli@latest download --token abc123 --workflow android-release --slug a1b2c3d4e5f6
```

### CI/CD Integration

Integrate this CLI tool using the "Script" Step to download artifacts from previous builds, eliminating the need to rebuild from source.

```yaml
steps:
  - script:
      inputs:
        content: |
          npx bitrise-api-cli download \
            --workflow android-release \
            --token $BITRISE_API_TOKEN
```

## 📝 License

This project is [MIT](LICENSE) licensed.

---

<div align="center">
<p>Found this project useful? Give it a ⭐️!</p>
</div>

[npm-image]: https://img.shields.io/npm/v/bitrise-api-cli
[npm-url]: https://www.npmjs.com/package/bitrise-api-cli
[npm-dl-stats]: https://img.shields.io/npm/dm/bitrise-api-cli
