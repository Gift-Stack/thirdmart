import Auctions from "./components/auctions";
import Header from "./components/header";

export default async function Home() {
  return (
    <main className="min-h-screen bg-home text-white">
      <div className="max-w-[1680px] mx-auto px-5">
        <Header />

        <Auctions />
      </div>
    </main>
  );
}
