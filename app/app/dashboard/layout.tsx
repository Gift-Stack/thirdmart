"use client";
import { useUserStore } from "@/store";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUserStore();
  const [hasInitializedStore, setHasInitializedStore] = useState(false);

  useEffect(() => {
    useUserStore.persist.rehydrate();
    setHasInitializedStore(true);
  }, []);

  if (!hasInitializedStore) {
    return <div>Loading...</div>;
  }

  if (!user) {
    redirect("/app/getting-started/signin");
  }
  return <>{children}</>;
};

export default DashboardLayout;
