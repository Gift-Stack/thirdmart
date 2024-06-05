import React from "react";

export default function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center ">
      <div className="flex flex-col items-center space-y-4">
        <div className="flex h-12 w-12 animate-spin items-center justify-center rounded-full border-4 border-gray-500 border-t-transparent">
          <LoaderPinwheelIcon className="h-8 w-8 text-gray-500" />
        </div>
        <p className="text-lg font-medium text-gray-400">Loading...</p>
      </div>
    </div>
  );
}

function LoaderPinwheelIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M2 12c0-2.8 2.2-5 5-5s5 2.2 5 5 2.2 5 5 5 5-2.2 5-5" />
      <path d="M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6" />
      <path d="M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}
