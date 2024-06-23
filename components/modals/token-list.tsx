/* eslint-disable @next/next/no-img-element */
import React from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

type Props = {
  direction: "from" | "to";
};

export function TokenList(props: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="cursor-pointer whitespace-nowrap inline-flex gap-2 items-center justify-center font-medium disabled:opacity-50 disabled:pointer-events-none ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-blue bg-secondary hover:bg-muted focus:bg-accent min-h-[44px] h-[44px] px-4 pl-2 pr-3 text-base !rounded-full data-[state=inactive]:hidden data-[state=active]:flex"
        >
          <div className="w-[28px] h-[28px] mr-0.5">
            <span
              className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"
              style={{ width: 28, height: 28 }}
            >
              <img
                alt="avatar"
                loading="lazy"
                width="28"
                height="28"
                decoding="async"
                data-nimg="1"
                className="aspect-square h-full w-full"
                srcSet="https://cdn.sushi.com/image/upload/f_auto,c_limit,w_32/d_unknown.png/native-currency/ethereum.svg 1x, https://cdn.sushi.com/image/upload/f_auto,c_limit,w_64/d_unknown.png/native-currency/ethereum.svg 2x"
                src="https://cdn.sushi.com/image/upload/f_auto,c_limit,w_64/d_unknown.png/native-currency/ethereum.svg"
                style={{ color: "transparent" }}
              />
            </span>
          </div>
          ETH
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Select a token</DialogTitle>
          <DialogDescription>
            Select a token from our default list or search for a token by symbol
            or address.
          </DialogDescription>
        </DialogHeader>
        <div className="group relative flex items-center justify-between w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="w-5 h-5 text-muted-foreground absolute left-3"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
              clipRule="evenodd"
            ></path>
          </svg>
          <Input placeholder="Search by token or address" className="pl-10" />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default TokenList;
