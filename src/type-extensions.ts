import "hardhat/types/config";
import { FireblocksProviderConfig } from "@fireblocks/fireblocks-web3-provider";

declare module "hardhat/types/config" {
  interface HttpNetworkUserConfig {
    fireblocks?: FireblocksProviderConfig;
  }

  interface HttpNetworkConfig {
    fireblocks?: FireblocksProviderConfig;
  }
}
