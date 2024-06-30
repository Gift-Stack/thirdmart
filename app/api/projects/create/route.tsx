import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const { chainId, userId, name } = await request.json();

    const api_response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/project/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chainId,
          userId,
          name,
          theme: "spring",
          useSmartWallet: true,
        }),
      }
    );

    const api_body = await api_response.json();

    return new NextResponse(api_body, {
      status: api_response.status,
      headers: api_response.headers,
    });
  } catch (error) {
    if (error instanceof Error) {
      return new NextResponse(error.message, {
        status: 500,
      });
    }
    return new NextResponse("Internal Server Error", {
      status: 500,
    });
  }
};
