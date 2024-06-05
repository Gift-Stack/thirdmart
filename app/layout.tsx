import type { Metadata } from "next";
import { Cabin } from "next/font/google";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiConfig } from "wagmi";
import { chains, config } from "@/web3/chains";
import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";

const cabin = Cabin({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cabin",
});

export const metadata: Metadata = {
  title: "Thirdmart | Create DeFi Apps with ease",
  description: "Create DeFi Apps with ease",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cabin.variable}>
        <WagmiConfig config={config}>
          <RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
        </WagmiConfig>
      </body>
    </html>
  );
}
