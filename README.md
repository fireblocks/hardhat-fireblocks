# Fireblocks Hardhat Plugin
> **Warning**
> This package is in an early beta stage and should not be used in production environments.
> The provided interfaces are likely to have breaking changes.

This is a [Hardhat](https://hardhat.org/) plugin for integrating with [Fireblocks](https://www.fireblocks.com/).

This plugin will help you to seamlessly intergrate Fireblocks into your Hardhat development stack.

You can use it to deploy contracts and sign transactions and messages.

## Installation

```bash
npm install @fireblocks/hardhat-fireblocks
```

Import the plugin in your `hardhat.config.js`:

```js
require("@fireblocks/hardhat-fireblocks");
```

Or if you are using TypeScript, in your `hardhat.config.ts`:

```ts
import "@fireblocks/hardhat-fireblocks";
```

## Configuration

This plugin extends the `HttpNetworkUserConfig` object with an optional
`fireblocks` field.

This is an example of how to set it:

```js
module.exports = {
  solidity: "0.8.9",
  networks: {
    ropsten: {
      url: "https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      fireblocks: {
        privateKey: process.env.FIREBLOCKS_API_PRIVATE_KEY_PATH,
        apiKey: process.env.FIREBLOCKS_API_KEY,
        vaultAccountIds: process.env.FIREBLOCKS_VAULT_ACCOUNT_IDS,
      }
    },
  },
};
```
