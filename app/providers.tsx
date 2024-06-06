"use client";
import { useState, type ReactNode } from "react";
// TODO: Plausibly replace rainbowkit with Web3modal
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";

import { config, chains } from "@/web3/chains";

const Providers = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </WagmiProvider>
    </>
  );
};

export default Providers;
