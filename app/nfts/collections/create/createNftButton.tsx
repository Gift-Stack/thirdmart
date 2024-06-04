"use client";
import React from "react";
import { useFormStatus } from "react-dom";

const CreateNftButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 disabled:hover:bg-blue-500"
      disabled={pending}
    >
      {pending ? "Creating your NFT..." : "Create NFT"}
    </button>
  );
};

export default CreateNftButton;
