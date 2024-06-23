import { Icons } from "@/components/icons";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
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
  );
};

export default Header;
