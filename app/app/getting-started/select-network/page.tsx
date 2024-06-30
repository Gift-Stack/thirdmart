"use client";

import { useState, useMemo, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BitcoinIcon from "@/icons/bitcoin";
import { useAccount, useChainId, useConnect, useSwitchChain } from "wagmi";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Chain as AppChain } from "@/web3/chains";
import { coinbaseWallet } from "wagmi/connectors";
import { base, baseSepolia } from "viem/chains";
import CreateProjectDetail from "@/components/modals/create-project-detail";
import useSignIn from "@/hooks/useSignin";

const blockchains = [
  {
    name: "Ethereum",
    description: "The most popular blockchain",
    disabled: false,
    chainId: 1,
  },
  {
    name: "Base",
    description: "The most popular blockchain",
    disabled: false,
    chainId: base.id,
  },
  {
    name: "Base Sepolia",
    description: "The most popular blockchain",
    disabled: false,
    chainId: baseSepolia.id,
  },
  {
    name: "Polygon",
    description: "The most popular blockchain",
    disabled: false,
    chainId: 137,
  },
  {
    name: "Avalanche",
    description: "The most popular blockchain",
    disabled: false,
    chainId: 43114,
  },
  {
    name: "Binance Smart Chain",
    description: "The second most popular blockchain",
    disabled: false,
    chainId: 56,
  },
] as const;

type Chain = (typeof blockchains)[number];

export default function SelectNetwork({
  searchParams,
}: {
  searchParams: Record<string, string | undefined>;
}) {
  const { chainId: searchChainId } = searchParams;
  const { push, replace } = useRouter();
  const pathname = usePathname();
  const primitiveSearchParams = useSearchParams();
  const { isConnected } = useAccount();
  const { switchChainAsync: switchNetwork } = useSwitchChain();
  const { connectAsync: openConnectModal } = useConnect();
  const connectedChainId = useChainId();
  const { loading, signIn } = useSignIn();

  const signin = async () => {
    const data = await openConnectModal?.({ connector: coinbaseWallet() });
    await signIn(data.accounts[0]);
  };

  const [_, setShowMultiChain] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBlockchains = useMemo(() => {
    return blockchains.filter((blockchain) =>
      blockchain.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const changeNetwork = useCallback(
    async (chainId: AppChain) => {
      if (String(chainId) !== searchChainId) {
        await switchNetwork?.({ chainId });
      }

      const params = new URLSearchParams(primitiveSearchParams?.toString());
      params.set("chainId", String(chainId));

      replace(pathname + "?" + params.toString(), { scroll: false });
    },
    [searchChainId, primitiveSearchParams, replace, pathname, switchNetwork]
  );

  return (
    <div className="flex flex-col h-screen">
      <header className=" py-4 px-6 flex items-center justify-between">
        <p className="text-lg font-semibold">Select Network</p>

        {searchChainId &&
          (isConnected ? (
            <CreateProjectDetail chainId={searchChainId} />
          ) : (
            <Button variant="outline" onClick={signin}>
              {loading ? "Signing in..." : "Sign in to proceed"}
            </Button>
          ))}
      </header>
      <main className="flex-1 bg-white dark:bg-gray-900 p-6">
        <div className="mb-6">
          <Input
            type="search"
            placeholder="Search blockchains..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <NetworkCard
            chain={{
              name: "Multi-chain",
              description: "Coming Soon",
              disabled: true,
              chainId: -1,
            }}
            activeChainId={searchChainId}
            onClick={() => setShowMultiChain(true)}
          />

          {filteredBlockchains.map((blockchain) => (
            <NetworkCard
              key={blockchain.name}
              chain={blockchain}
              onClick={() => changeNetwork(blockchain.chainId)}
              activeChainId={searchChainId}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

function NetworkCard({
  activeChainId,
  chain,
  onClick,
}: {
  activeChainId?: string | undefined;
  chain:
    | Chain
    | {
        name: "Multi-chain";
        description: string;
        disabled: boolean;
        chainId: -1;
      };
  onClick: () => void;
}) {
  return (
    <Card
      className={`bg-white dark:bg-gray-800 p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${
        chain.disabled ? "opacity-50 pointer-events-none" : ""
      } ${
        activeChainId === String(chain.chainId)
          ? "border-2 border-gray-500 dark:border-gray-400"
          : ""
      }`}
      onClick={chain.disabled ? undefined : onClick}
    >
      <div className="flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full mb-4">
        <BitcoinIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
      </div>
      <div className="text-lg font-semibold">{chain.name}</div>
      {chain.description && (
        <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {chain.description}
        </div>
      )}
    </Card>
  );
}
