import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const { walletAddress } = await request.json();

    const api_response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/user/connect`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          walletAddress,
        }),
      }
    );

    const api_body = await api_response.json();

    return NextResponse.json(api_body.data, {
      status: api_response.status,
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
