"use client";

import { useState, useMemo, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useAccount, useChainId, useConnect, useSwitchChain } from "wagmi";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Chain as AppChain } from "@/web3/chains";
import { coinbaseWallet } from "wagmi/connectors";
import { base, baseSepolia } from "viem/chains";

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

  const proceed = useCallback(async () => {
    if (!isConnected) {
      openConnectModal?.({ connector: coinbaseWallet() });
    } else {
      if (String(connectedChainId) !== searchChainId) {
        await switchNetwork?.({ chainId: connectedChainId });
      }

      const params = new URLSearchParams(primitiveSearchParams?.toString());

      push("/app/dashboard" + "?" + params.toString());
    }
  }, [
    connectedChainId,
    isConnected,
    openConnectModal,
    primitiveSearchParams,
    push,
    searchChainId,
    switchNetwork,
  ]);

  return (
    <div className="flex flex-col h-screen">
      <header className=" py-4 px-6 flex items-center justify-between">
        <div className="text-lg font-semibold">Select Network</div>
        {searchChainId && (
          <Button variant="outline" onClick={proceed}>
            {isConnected ? "Proceed" : "Connect to proceed"}
          </Button>
        )}
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

function BitcoinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" />
    </svg>
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
