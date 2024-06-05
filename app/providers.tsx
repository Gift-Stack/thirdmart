"use client";
import React from "react";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiConfig } from "wagmi";
import { chains, config } from "@/web3/chains";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <WagmiConfig config={config}>
        <RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
      </WagmiConfig>
    </>
  );
};

export default Providers;
