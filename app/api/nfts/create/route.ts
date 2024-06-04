import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { NFTCollectionReject, NFTCollectionResponse } from "@/web3/types";

const crossmintApiUrl = process.env.NEXT_PUBLIC_CROSSMINT_API_URL;
const crossmintApiKey = process.env.CROSSMINT_API_KEY;

export const POST = async (req: NextApiRequest) => {
  const data = req.body;
  try {
    const crossmintRequest = await fetch(
      `${crossmintApiUrl}/2022-06-09/collections/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": crossmintApiKey!,
        },
        body: JSON.stringify({
          ...data,
          chain: "base",
        }),
      }
    );

    if (crossmintRequest.status !== 200) {
      throw new Error();
    }

    return NextResponse.json<NFTCollectionResponse>(
      await crossmintRequest.json()
    );
  } catch (error) {
    return NextResponse.json<NFTCollectionReject>({
      error: true,
      message: (error as NFTCollectionReject).message,
    });
  }
};
