"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);
  return (
    <div className="flex h-screen w-full">
      <div
        className={cn(
          "flex flex-col bg-background border-r border-muted w-64 shrink-0 overflow-hidden transition-all duration-200 ease-in-out",
          { "w-0": isOpen }
        )}
      >
        <header className="flex items-center h-16 px-4 border-b">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold"
            prefetch={false}
          >
            <Icons.Mountain className="w-6 h-6" />
            <span>Thirdmart</span>
          </Link>
        </header>
        <nav className="flex flex-col gap-2 p-4">
          <Button variant="ghost" className="justify-start gap-2">
            <Icons.LayoutGrid className="w-5 h-5" />
            <span>Dashboard</span>
          </Button>
          <Button variant="ghost" className="justify-start gap-2">
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
      </div>
      <div className="flex flex-col flex-1">
        <header className="flex items-center h-16 px-4 border-b">
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={toggle} size="icon">
              <Icons.Menu className="w-5 h-5" />
            </Button>
          </div>
          <nav className="ml-auto flex gap-4">
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Docs
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Support
            </Link>
          </nav>
        </header>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
