import React from "react";
import { Icons } from "../icons";

export default function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center ">
      <div className="flex flex-col items-center space-y-4">
        <div className="flex h-12 w-12 animate-spin items-center justify-center rounded-full border-4 border-gray-500 border-t-transparent">
          <Icons.LoaderPinwheel className="h-8 w-8 text-gray-500" />
        </div>
        <p className="text-lg font-medium text-gray-400">Loading...</p>
      </div>
    </div>
  );
}
