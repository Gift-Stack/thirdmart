import { Icons } from "@/components/icons";
import TokenList from "@/components/modals/token-list";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TransparentInput } from "@/components/ui/input";

export default function Dashboard() {
  return (
    <main className="flex-1 flex">
      <div className="flex-1 flex flex-col items-center justify-center gap-4 p-8">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Icons.Smartphone className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Icons.Tablet className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Icons.Computer className="w-5 h-5" />
          </Button>
        </div>
        <Card className="w-full max-w-[800px] h-[500px] overflow-hidden bg-red-400">
          <CardContent className="flex flex-col items-center justify-center h-full">
            <div className="w-[350px] h-[80%] max-h-[700px] flex flex-col justify-center rounded-xl gap-3">
              <Info />
              <div className="bg-white h-full flex flex-col justify-between items-center rounded-xl py-3 px-3">
                <div className="flex items-center">
                  <TransparentInput className="flex-1" />
                  <TokenList direction="from" />
                </div>

                <div className="left-0 right-0 lg:mt-[-26px] lg:mb-[-26px] flex items-center justify-center">
                  <button
                    type="button"
                    className="hover:shadow-sm transition-border z-10 group bg-background p-2 border border-accent transition-all rounded-full cursor-pointer"
                  >
                    <div className="transition-transform rotate-0 group-hover:rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        strokeWidth="3"
                        className="w-4 h-4 lg:w-3 lg:h-3 text-blue"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.97 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06L8.25 4.81V16.5a.75.75 0 01-1.5 0V4.81L3.53 8.03a.75.75 0 01-1.06-1.06l4.5-4.5zm9.53 4.28a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V7.5a.75.75 0 01.75-.75z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </div>

                <div className="flex items-center">
                  <TransparentInput className="flex-1" />
                  <TokenList direction="to" />
                </div>

                <Button className="w-full">Swap</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

const Info = () => {
  return (
    <div className="opacity-100">
      <div className="relative rounded-xl border border-accent shadow-sm bg-white dark:bg-background bg-gradient-to-r from-[#3b82f6]/20 to-[#ec4899]/20">
        <div className="flex flex-col space-y-1.5 p-6 whitespace-pre-wrap">
          <h3 className="text-lg font-semibold leading-none tracking-tight">
            <div className="opacity-100">
              <span className="text-base tracking-tighter saturate-200 flex items-center gap-2 bg-gradient-to-r from-[#3b82f6] to-[#ec4899] bg-clip-text text-transparent">
                <svg
                  width="20"
                  height="20"
                  className="text-[#3b82f6]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <rect width="256" height="256" fill="none"></rect>
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="24"
                    d="M32,72H55.06445a64,64,0,0,1,52.079,26.80076l41.7132,58.39848A64,64,0,0,0,200.93555,184H232"
                  ></path>
                  <polyline
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="24"
                    points="208 48 232 72 208 96"
                  ></polyline>
                  <polyline
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="24"
                    points="208 160 232 184 208 208"
                  ></polyline>
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="24"
                    d="M152.76794 93.858A64.00219 64.00219 0 0 1 200.93555 72H232M32 184H55.06445a64.00212 64.00212 0 0 0 48.16769-21.85814"
                  ></path>
                </svg>
                Cross-chain Swap
              </span>
            </div>
          </h3>
          <div className="text-sm text-muted-foreground">
            Swap tokens natively across 15 chains including Ethereum, Arbitrum,
            Optimism, Polygon, Base and more!{" "}
            <a
              target="_blank"
              className="text-blue hover:underline"
              href="https://www.sushi.com/blog/sushixswap-v2"
              rel="noreferrer"
            >
              Learn more.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
