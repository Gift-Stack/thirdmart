import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function GettingStarted() {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 md:py-20 px-4 md:px-6">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Get Started</h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Choose the setup that best fits your needs.
          </p>
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold">Building from Scratch</h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Select the features you want to integrate.{" "}
              <span className="text-sm">(You can always add more later)</span>
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              <Option
                title="Visual Composer"
                description="Drag-and-drop page builder"
                disabled
              />
              <Option
                title="DeFi Capabilities"
                description="Integrate decentralized finance"
                disabled
              />
              <Option
                title="Blockchain Integration"
                description="Connect to blockchain networks"
                disabled
              />
            </div>
            <div className="mt-6">
              <Link href="/app/getting-started/select-network">
                <Button className="w-full py-6">Next</Button>
              </Link>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold">
              Integrating with Existing Web2 Apps
            </h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Seamlessly integrate your existing web applications.
            </p>
            <div className="mt-6">
              <Button className="w-full py-6">Integrate with Web2 Apps</Button>
              <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Mobile Integration - Coming Soon
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Option = ({
  title,
  description,
  disabled,
}: {
  title: string;
  description: string;
  disabled?: boolean;
}) => {
  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium">{title}</h3>
          {disabled && (
            <span className="text-gray-500 text-xs">(Coming Soon)</span>
          )}
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>
        <Switch disabled={disabled} />
      </div>
    </div>
  );
};
