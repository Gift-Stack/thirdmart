import React from "react";
import { Icons } from "@/components/icons";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="#"
      className="flex items-center gap-2 text-lg font-semibold no-underline"
      prefetch={false}
    >
      <Icons.Mountain className="w-6 h-6" />
      <span>Thirdmart</span>
    </Link>
  );
};

export default Logo;

export const SmallLogo = () => {
  return (
    <Link
      href="#"
      className="flex items-center gap-2 text-lg font-semibold"
      prefetch={false}
    >
      <Icons.Mountain className="w-6 h-6" />
    </Link>
  );
};
