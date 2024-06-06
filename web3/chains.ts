import { http, createConfig } from "wagmi";
import {
  avalanche,
  base,
  baseSepolia,
  bsc,
  mainnet,
  polygon,
  sepolia,
} from "wagmi/chains";
import { coinbaseWallet, injected, walletConnect } from "wagmi/connectors";

export const chains = [
  mainnet,
  sepolia,
  baseSepolia,
  base,
  polygon,
  avalanche,
  bsc,
] as const;

export type Chain = (typeof chains)[number]["id"];

export const config = createConfig({
  chains,
  connectors: [
    // injected(),
    coinbaseWallet({ appName: "Thirdmart", preference: "smartWalletOnly" }),
    // walletConnect({ projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID! }),
  ],
  ssr: true,
  transports: chains.reduce((acc, chain) => {
    acc[chain.id] = http();
    return acc;
  }, {} as Record<number, any>),
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
