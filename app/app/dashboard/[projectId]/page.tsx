import { Icons } from "@/components/icons";
import TokenList from "@/components/modals/token-list";
import { Button } from "@/components/ui/button";
import { TransparentInput } from "@/components/ui/input";
import useStore from "@/store";

import {
  Swap,
  SwapAmountInput,
  SwapToggleButton,
  SwapButton,
} from "@coinbase/onchainkit/swap";
import { setOnchainKitConfig } from "@coinbase/onchainkit";
import { getTokens } from "@coinbase/onchainkit/token";
import PreviewWrapper, { Info } from "./components/preview-wrapper";

export default async function Dashboard() {
  // setOnchainKitConfig({ apiKey: process.env.NEXT_PUBLIC_COINBASE_API_KEY });
  // const tokens = await getTokens({ search: "" });
  // console.log("tokens", tokens);
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

        <PreviewWrapper>
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
        </PreviewWrapper>
      </div>
    </main>
  );
}
