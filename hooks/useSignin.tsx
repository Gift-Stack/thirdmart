import { connectUser } from "@/actions/user";
import { useUserStore } from "@/store";
import { useCallback, useState } from "react";

const useSignIn = () => {
  const [loading, setLoading] = useState(false);
  const { setUser } = useUserStore();
  const signIn = useCallback(
    async (walletAddress: string) => {
      setLoading(true);
      const user = await connectUser(walletAddress);
      setUser(user);
      setLoading(false);
    },
    [setUser]
  );

  return { signIn, loading };
};

export default useSignIn;
