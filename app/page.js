import HomePage from "./Home/page";
import Intro from "@/components/Intro";

export default function Home() {
  return (
    <main className="w-full h-full flex items-center justify-center">
      <HomePage />
      <Intro />
    </main>
  );
}
