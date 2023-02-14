[![npm version](https://badge.fury.io/js/@fireblocks%2Fhardhat-fireblocks.svg)](https://badge.fury.io/js/@fireblocks%2Fhardhat-fireblocks)

# Fireblocks Hardhat Plugin

This is a [Hardhat](https://hardhat.org/) plugin for integrating with [Fireblocks](https://www.fireblocks.com/).

This plugin will help you to seamlessly integrate Fireblocks into your Hardhat development stack.

You can use it to deploy contracts and sign transactions and messages.

## Installation

```bash
npm install @fireblocks/hardhat-fireblocks
```

Import the plugin in your `hardhat.config.js`:

```js
require("@fireblocks/hardhat-fireblocks");
const { ApiBaseUrl } = require("@fireblocks/fireblocks-web3-provider");
```

Or if you are using TypeScript, in your `hardhat.config.ts`:

```ts
import "@fireblocks/hardhat-fireblocks";
import { ApiBaseUrl } from "@fireblocks/fireblocks-web3-provider";
```

## Configuration

This plugin extends the `HttpNetworkUserConfig` object with an optional
`fireblocks` field.

This is an example of how to set it:

```js
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: "https://rpc.ankr.com/eth_goerli",
      fireblocks: {
        // apiBaseUrl: ApiBaseUrl.Sandbox // If using a sandbox workspace
        privateKey: process.env.FIREBLOCKS_API_PRIVATE_KEY_PATH,
        apiKey: process.env.FIREBLOCKS_API_KEY,
        vaultAccountIds: process.env.FIREBLOCKS_VAULT_ACCOUNT_IDS,
      }
    },
  },
};
```
