import React from "react";
import NftForm from "./nftForm";

const CreateNfts = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white p-4 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center pb-4">Create NFT</h1>
        <NftForm />
      </div>
    </div>
  );
};

export default CreateNfts;
