import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <main className="flex-1 flex">
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
        <Card className="w-full max-w-[800px] h-[500px] overflow-hidden bg-red-400">
          <CardContent className="flex flex-col items-center justify-center h-full">
            <h1 className="text-white text-2xl font-semibold">Hello World</h1>
            <div className="bg-white w-[300px] h-[80%] rounded-xl"></div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
