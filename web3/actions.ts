"use server";
import { redirect } from "next/navigation";
import { z } from "zod";
import {
  NFTCollection,
  NFTCollectionReject,
  NFTCollectionResponse,
} from "./types";

const crossmintApiUrl = process.env.NEXT_PUBLIC_CROSSMINT_API_URL;
const crossmintApiKey = process.env.NEXT_PUBLIC_CROSSMINT_API_KEY;

export const useCrossMint = () => {
  return {
    createNftCollention,
  };
};

const createNftCollention = async (
  data: Omit<NFTCollection, "chain">
): Promise<NFTCollectionResponse> => {
  try {
    const response = await fetch(`/apis/nfts/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        chain: "base",
      }),
    });

    return response.json();
  } catch (error) {
    return error as NFTCollectionReject;
  }
};

const nftCollectionSchema = z.object({
  chain: z.literal("base"),
  fungibility: z.literal("fungible").or(z.literal("semi-fungible")),
  metadata: z.object({
    description: z.string(),
    imageUrl: z.string(),
    name: z.string(),
    symbol: z.string().optional(),
  }),
  payments: z
    .object({
      price: z.number(),
      recipientAddress: z.string(),
    })
    .optional(),
  reuploadLinkedFiles: z.boolean().optional(),
  supplyLimit: z.number().optional(),
});

type NftCollection = z.infer<typeof nftCollectionSchema>;

export const createNftCollections = async (formData: FormData) => {
  const nft = {
    fungibility: formData.get("fungibility"),
    metadata: {
      description: formData.get("description")!,
      imageUrl: formData.get("image"),
      name: formData.get("name"),
      symbol: formData.get("symbol") || undefined,
    },
    payments: {
      price: formData.get("price") || undefined,
      recipientAddress: formData.get("recipientAddress") || undefined,
    },
    reuploadLinkedFiles: true,
    supplyLimit: 100,
  };

  try {
    const res = await fetch(`${crossmintApiUrl}/2022-06-09/collections/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": crossmintApiKey!,
      },
      body: JSON.stringify({
        ...nft,
        chain: process.env.NODE_ENV === "production" ? "base" : "base-sepolia",
      }),
    });

    if (res.status !== 200) {
      throw new Error();
    }
    const data = await res.json();
    redirect(`/nfts/collections/${data.id}`);
  } catch (error) {
    console.log("An error occurred while creating the NFT", error);
    // return error;
  }
};
