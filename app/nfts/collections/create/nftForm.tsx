import { createNftCollections } from "@/web3/actions";
import React from "react";
import CreateNftButton from "./createNftButton";

const NftForm = () => {
  return (
    <form action={createNftCollections} className="flex flex-col space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="p-2 border border-gray-300 rounded-lg"
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        className="p-2 border border-gray-300 rounded-lg"
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        className="p-2 border border-gray-300 rounded-lg"
      />
      <input
        type="text"
        name="recipientAddress"
        placeholder="Recipient Address"
        className="p-2 border border-gray-300 rounded-lg"
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        className="p-2 border border-gray-300 rounded-lg"
      />
      <select
        name="fungibility"
        className="p-2 border border-gray-300 rounded-lg"
      >
        <option value="non-fungible">Non-fungible</option>
        <option value="semi-fungible">Semi-fungible</option>
      </select>
      <CreateNftButton />
    </form>
  );
};

export default NftForm;
