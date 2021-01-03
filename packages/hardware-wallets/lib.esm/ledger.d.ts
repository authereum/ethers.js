import { ethers } from "ethers";
import Eth from "@ledgerhq/hw-app-eth";
export declare class LedgerSigner extends ethers.Signer {
    readonly type: string;
    path: string;
    readonly _eth: Promise<Eth>;
    constructor(provider?: ethers.providers.Provider, type?: string, path?: string, ethApp?: Eth);
    _retry<T = any>(callback: (eth: Eth) => Promise<T>, timeout?: number): Promise<T>;
    setPath(path: string): void;
    getAddress(): Promise<string>;
    signMessage(message: ethers.utils.Bytes | string): Promise<string>;
    signTransaction(transaction: ethers.providers.TransactionRequest): Promise<string>;
    getStarkPublicKey(path: string): Promise<string>;
    starkSign(path: string, hash: string): Promise<any>;
    connect(provider: ethers.providers.Provider): ethers.Signer;
}
