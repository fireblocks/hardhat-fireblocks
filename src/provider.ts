import { ProviderWrapperWithChainId } from "hardhat/internal/core/providers/chainId";
import { EIP1193Provider, RequestArguments } from "hardhat/types";
import { FireblocksWeb3Provider, SIGNER_METHODS, FireblocksProviderConfig } from "@fireblocks/fireblocks-web3-provider";

export class FireblocksSigner extends ProviderWrapperWithChainId {
  private _fireblocksWeb3Provider: FireblocksWeb3Provider | undefined;

  constructor(provider: EIP1193Provider, fireblocksConfig: FireblocksProviderConfig) {
    super(provider);
    this._fireblocksWeb3Provider = new FireblocksWeb3Provider(fireblocksConfig);
  }

  public async request(args: RequestArguments): Promise<unknown> {
    if (SIGNER_METHODS.includes(args.method)) {
      return this._fireblocksWeb3Provider!.request(args);
    }

    return this._wrappedProvider.request(args);
  }
}
