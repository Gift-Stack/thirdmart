import Link from "next/link";
import { Icons } from "@/components/icons";
import ConnectWalletButton from "@/components/compounds/connect-button";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <Icons.Mountain className="h-6 w-6" />
          <span className="sr-only">Thirdmart</span>
        </Link>
        <ConnectWalletButton />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default AppLayout;
