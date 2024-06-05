"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useSwitchNetwork } from "wagmi";
import { useRouter } from "next/navigation";

const blockchains = [
  {
    name: "Ethereum",
    description: "The most popular blockchain",
    disabled: false,
    chainId: 1,
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
  {
    name: "Fantom",
    description: "The most popular blockchain",
    disabled: false,
    chainId: 250,
  },
];

type Chain = (typeof blockchains)[number];

export default function SelectNetwork() {
  const { push } = useRouter();
  const [showMultiChain, setShowMultiChain] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredBlockchains = useMemo(() => {
    return blockchains.filter((blockchain) =>
      blockchain.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);
  const { switchNetworkAsync: switchNetwork } = useSwitchNetwork();
  return (
    <div className="flex flex-col h-screen">
      <header className=" py-4 px-6 flex items-center justify-between">
        <div className="text-lg font-semibold">Select Network</div>
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
            }}
            onClick={() => setShowMultiChain(true)}
          />

          {filteredBlockchains.map((blockchain) => (
            <NetworkCard
              key={blockchain.name}
              chain={blockchain}
              onClick={() =>
                switchNetwork?.(blockchain.chainId)
                  .then(() => {
                    push("/app/dashboard");
                  })
                  .catch((error) => {
                    console.log("Error switching network", error);
                  })
              }
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
  chain,
  onClick,
}: {
  chain: Chain | Omit<Chain, "chainId">;
  onClick: () => void;
}) {
  return (
    <Card
      className={`bg-white dark:bg-gray-800 p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${
        chain.disabled ? "opacity-50 pointer-events-none" : ""
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
