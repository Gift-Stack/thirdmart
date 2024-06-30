import React, { useCallback, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { createProject } from "@/actions/project";
import { useUserStore } from "@/store";

const CreateProjectDetail = ({ chainId }: { chainId: string }) => {
  const { push } = useRouter();
  const { user } = useUserStore();
  const [data, setData] = useState({
    name: "",
    title: "",
  });
  const [loading, setLoading] = useState(false);

  const { name, title } = data;

  const handleDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const proceed = useCallback(async () => {
    if (!name) {
      return;
    }
    setLoading(true);

    const project = await createProject({
      chainId,
      userId: user?.userId!,
      name,
      title,
    });
    setLoading(false);

    push(`/app/dashboard/${project.projectId}`);
  }, [chainId, name, push, title, user?.userId]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Proceed</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Project Information</DialogTitle>
          <DialogDescription>
            Select a token from our default list or search for a token by symbol
            or address.
          </DialogDescription>
        </DialogHeader>
        <div className="group relative w-full">
          <label className="opacity-90 text-sm">Project Name</label>
          <Input
            name="name"
            value={name}
            onChange={handleDataChange}
            placeholder="Ex. Thirdmart swap app"
            className="px-3"
          />
        </div>
        <div className="group relative w-full">
          <label className="opacity-90 text-sm">Project Title</label>
          <Input
            name="title"
            value={title}
            onChange={handleDataChange}
            placeholder="Ex. Cross-chain swap"
            className="px-3"
          />
        </div>

        <Button onClick={proceed} disabled={loading || !name}>
          {loading ? "Creating..." : "Create"}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default CreateProjectDetail;
