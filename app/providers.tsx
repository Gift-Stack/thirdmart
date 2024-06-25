"use client";
import { useState, type ReactNode } from "react";
// TODO: Plausibly replace rainbowkit with Web3modal
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { OnchainKitProvider } from "@coinbase/onchainkit";

import { config } from "@/web3/chains";
import { base } from "viem/chains";

const Providers = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <OnchainKitProvider
            apiKey={process.env.NEXT_PUBLIC_COINBASE_API_KEY}
            chain={base}
          >
            {children}
          </OnchainKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  );
};

export default Providers;
