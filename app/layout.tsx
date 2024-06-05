import type { Metadata } from "next";
import { Cabin } from "next/font/google";
import Providers from "./providers";
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
