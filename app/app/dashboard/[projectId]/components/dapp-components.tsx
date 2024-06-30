import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Header from "./header";
import { useProjectStore } from "@/store";
import { GradientPicker } from "@/components/compounds/gradient";
import { ArrowLeft } from "lucide-react";

const DappComponents = ({
  open,
  close,
}: {
  open: boolean;
  close: () => void;
}) => {
  const store = useProjectStore();

  if (!store) {
    return <div>Loading...</div>;
  }

  const { modifyInfo, windowColor, title, description } = store;

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
          <ArrowLeft className="h-5 w-5" />
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
