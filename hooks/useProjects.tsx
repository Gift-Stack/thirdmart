import { getProjects } from "@/actions/project";
import { useUserStore } from "@/store";
import { useQuery } from "@tanstack/react-query";

const useProjects = () => {
  const { user } = useUserStore();
  const {
    data: projects = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      return await getProjects(user?.userId || "");
    },
  });

  return { projects, loading: isLoading, error: isError };
};

export default useProjects;
