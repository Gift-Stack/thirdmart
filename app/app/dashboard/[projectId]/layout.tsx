"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Icons } from "@/components/icons";
import DappComponents from "./components/dapp-components";
import Header from "./components/header";
import ConnectWalletButton from "@/components/compounds/connect-button";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [componentsNavOpened, setComponentsNavOpened] = useState(false);

  const toggle = () => {
    if (isOpen) {
      setIsOpen(false);
      setComponentsNavOpened(false);
    } else {
      setIsOpen(true);
    }
  };
  const toggleComponentsNav = () => setComponentsNavOpened((prev) => !prev);
  return (
    <div className="flex h-screen w-full">
      <div
        className={`flex flex-col bg-background border-r border-muted shrink-0 overflow-hidden transition-all duration-200 ease-in-out ${
          isOpen ? "w-64" : "w-0"
        }`}
      >
        <Header />
        <nav className="flex flex-col gap-2 p-4">
          <Button
            onClick={toggleComponentsNav}
            variant="ghost"
            className="justify-start gap-2"
          >
            <Icons.Layers className="w-5 h-5" />
            <span>Components</span>
          </Button>
          <Button variant="ghost" className="justify-start gap-2">
            <Icons.Code className="w-5 h-5" />
            <span>Code Editor</span>
          </Button>
          <Button variant="ghost" className="justify-start gap-2">
            <Icons.Settings className="w-5 h-5" />
            <span>Settings</span>
          </Button>
        </nav>
        <DappComponents
          open={componentsNavOpened}
          close={toggleComponentsNav}
        />
      </div>
      <div className="flex flex-col flex-1">
        <header className="flex items-center h-16 px-4 border-b">
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={toggle} size="icon">
              <Icons.Menu className="w-5 h-5" />
            </Button>
          </div>
          <nav className="ml-auto flex items-center gap-4">
            <Link
              href="/app/dashboard"
              className="text-xs font-medium hover:underline underline-offset-4 uppercase"
              prefetch={false}
            >
              Dashboard
            </Link>
            <Link
              href="/docs"
              className="text-xs font-medium hover:underline underline-offset-4 uppercase"
              prefetch={false}
            >
              Docs
            </Link>
            {/* <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Support
            </Link> */}
            <ConnectWalletButton />
          </nav>
        </header>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
