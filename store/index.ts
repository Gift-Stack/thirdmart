import { create } from "zustand";

const info = {
  windowColor: "#007bff",
  title: "Cross-chain Swap",
  description:
    "Swap tokens natively across 15 chains including Ethereum, Arbitrum, Optimism, Polygon, Base and more! <a href='https://www.sushi.com/blog/sushixswap-v2' target='_blank' rel='noreferrer'>Learn more.</a>",
  rounded: true,
};

type Info = typeof info;

type Store = Info & {
  modifyInfo: (key: keyof Info, value: Info[keyof Info]) => void;
};

const useStore = create<Store>((set) => ({
  ...info,
  modifyInfo: (key: keyof Info, value: Info[keyof Info]) => {
    set((state: Partial<Info>) => ({
      ...state,
      [key]: value,
    }));
  },
}));

export default useStore;
