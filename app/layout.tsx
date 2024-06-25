import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Providers from "./providers";
import "../style/globals.css";
// import "@rainbow-me/rainbowkit/styles.css";
import "@coinbase/onchainkit/tailwind.css";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
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
      <body className={space_grotesk.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
