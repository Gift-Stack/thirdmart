import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Pallete from "../components/pallete";
import { Suspense } from "react";
import Link from "next/link";

export default function Dashboard({
  params,
}: {
  params: { projectId: string };
}) {
  return (
    <main className="flex-1 flex flex-col">
      <div className="p-5 flex justify-end gap-3">
        <Link href={`/app/dashboard/${params.projectId}/preview`}>
          <Button variant="outline" className="px-6">
            Preview
          </Button>
        </Link>
        <Button className="px-6">Save</Button>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center gap-4 p-8">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Icons.Smartphone className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Icons.Tablet className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Icons.Computer className="w-5 h-5" />
          </Button>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <Pallete projectId={params.projectId} />
        </Suspense>
      </div>
    </main>
  );
}
