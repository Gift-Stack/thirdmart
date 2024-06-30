import { create } from "zustand";
import useStorePostHydration from "./post-hydration-store";

const info = {
  projectId: "",
  name: null,
  chainId: "1",
  logoUrl: null,
  theme: "spring",
  useSmartWallet: true,
  userId: "0da277d9-15ee-40cb-bb04-1e70f3c4f2f2",
  createdAt: "2024-06-18T17:54:08.907Z",
  windowColor: "#007bff",
  title: "Cross-chain Swap",
  description:
    "Swap tokens natively across 15 chains including Ethereum, Arbitrum, Optimism, Polygon, Base and more! <a href='https://www.sushi.com/blog/sushixswap-v2' target='_blank' rel='noreferrer'>Learn more.</a>",
  rounded: true,
};

export type Project = typeof info;

type Store = Project & {
  modifyInfo: (key: keyof Project, value: Project[keyof Project]) => void;
  projects: Project[];
};

export const useProjectStore = create<Store>((set) => ({
  ...info,
  projects: [],
  modifyInfo: (key: keyof Project, value: Project[keyof Project]) => {
    set((state: Partial<Project>) => ({
      ...state,
      [key]: value,
    }));
  },
}));

// export const useProjectStore = () => {
//   const store = useStorePostHydration(useStore, (state) => state);
//   return store;
// };
