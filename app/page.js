import Intro from "@/components/Intro";
import HomePage from "./Home/page";

export default function Home() {
  return (
    <main className="w-full h-full flex items-center justify-center">
      <Intro/>
      <HomePage />
    </main>
  );
}
