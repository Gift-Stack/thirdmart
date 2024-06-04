type Metadata = {
  description: string;
  imageUrl: string;
  name: string;
  symbol?: string;
};

type Fungibility = "fungible" | "semi-fungible";

export type NFTCollection = {
  chain: "base";
  fungibility: Fungibility;
  metadata: Metadata;
  payments: {
    price: string;
    recipientAddress: string;
  };
  reuploadLinkedFiles: boolean;
  supplyLimit: number;
};

export type NFTCollectionReject = {
  error: boolean;
  message: string;
};

export type NFTCollectionResponse =
  | {
      actionId: string;
      fungibility: Fungibility;
      id: string;
      metadata: Metadata;
      onChain: {
        chain: "base";
        type: "erc-1155" | "erc-721";
      };
    }
  | NFTCollectionReject;
