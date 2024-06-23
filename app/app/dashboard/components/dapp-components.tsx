import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Header from "./header";
import useStore from "@/store";
import { GradientPicker } from "@/components/compounds/gradient";

const DappComponents = ({
  open,
  close,
}: {
  open: boolean;
  close: () => void;
}) => {
  const { modifyInfo, windowColor, title, description } = useStore(
    (state) => state
  );

  return (
    <div
      className={cn(
        "absolute h-full w-64 border-r border-muted bg-white transition-[left] duration-200 ease-in-out",
        {
          "-left-64": !open,
          "left-0": open,
        }
      )}
    >
      <>
        <Header />
        <Button
          type="button"
          variant="ghost"
          className="absolute top-4 right-2 p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
          onClick={close}
        >
          {/* Replace with Arrow icon */}
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      </>

      <nav className="flex flex-col gap-4 p-4">
        <div>
          <p>App Background</p>

          <GradientPicker
            background={windowColor}
            setBackground={(value) => {
              modifyInfo("windowColor", value);
            }}
          />
        </div>
      </nav>
    </div>
  );
};

export default DappComponents;
