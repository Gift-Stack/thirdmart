"use client";
import { useUserStore } from "@/store";
import React, { useEffect, useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [hasInitializedStore, setHasInitializedStore] = useState(false);

  useEffect(() => {
    useUserStore.persist.rehydrate();
    setHasInitializedStore(true);
  }, []);

  if (!hasInitializedStore) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default DashboardLayout;
