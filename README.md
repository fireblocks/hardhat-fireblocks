[![npm version](https://badge.fury.io/js/@fireblocks%2Fhardhat-fireblocks.svg)](https://badge.fury.io/js/@fireblocks%2Fhardhat-fireblocks)

# Fireblocks Hardhat Plugin
> **Warning**  
> This package is in a beta stage and should be used at your own risk.  
> The provided interfaces might go through backwards-incompatibale changes.  
> For a more stable library (with a different paradigm) you can use the DeFi SDK (https://github.com/fireblocks/fireblocks-defi-sdk)

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
      url: "https://rpc.ankr.com/eth_goerli",
      fireblocks: {
        privateKey: process.env.FIREBLOCKS_API_PRIVATE_KEY_PATH,
        apiKey: process.env.FIREBLOCKS_API_KEY,
        vaultAccountIds: process.env.FIREBLOCKS_VAULT_ACCOUNT_IDS,
      }
    },
  },
};
```
