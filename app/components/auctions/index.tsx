import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";

async function getAuctions() {
  return Promise.resolve(
    Array(4)
      .fill(null)
      .map(() => ({
        name: "Mystic 13",
        image: "/nfts/nft_1.png",
        bidTime: "6h : 34m : 29s",
      }))
  );
}

const Auctions = async () => {
  const auctions = await getAuctions();

  return (
    <div className="mt-16">
      <div className="flex items-center justify-between mb-16">
        <p className="text-2xl font-semibold">Running Auctions</p>
        <div className="flex items-center gap-2">
          <button className="flex items-center justify-center border rounded-full h-8 w-8">
            <ChevronLeftIcon />
          </button>
          <button className="flex items-center justify-center border rounded-full h-8 w-8">
            <ChevronRightIcon />
          </button>
        </div>
      </div>

      <div className="flex gap-10 overflow-auto scroll-  text-black">
        {auctions.map((auction, index) => {
          return (
            <div
              key={index}
              className="p-3 rounded-3xl rounded-br-[50px] min-w-[335px] max-w-[335px] flex-1 h-[409px] bg-white relative"
            >
              <Image
                src={auction.image}
                alt=""
                width={331}
                height={256}
                className="rounded-xl"
                priority
              />

              <div className="my-6 flex items-center justify-between">
                <p className="font-semibold text-3xl">{auction.name}</p>
                <div></div>
              </div>

              <div className="flex items-center justify-between text-2xl font-semibold">
                <p className="text-[#606060]">Bid Time</p>
                <p className="">
                  <span className="bg-bid-time-h bg-clip-text text-transparent">
                    6h
                  </span>{" "}
                  :{" "}
                  <span className="bg-bid-time-m bg-clip-text text-transparent">
                    34m
                  </span>{" "}
                  :{" "}
                  <span className="bg-bid-time-s bg-clip-text text-transparent">
                    29s
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Auctions;
