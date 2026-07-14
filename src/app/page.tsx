import { Hero } from "@/components/Hero";
import { MissionStatus } from "@/components/MissionStatus";
import { WatchLive } from "@/components/WatchLive";
import { Prime } from "@/components/Prime";
import { Academy } from "@/components/Academy";
import { Allocations } from "@/components/Allocations";
import { FreeTelegram } from "@/components/FreeTelegram";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-primary relative overflow-x-hidden">
      <Hero />
      <MissionStatus />
      <WatchLive />
      <Prime />
      <Academy />
      <Allocations />
      <FreeTelegram />
      <About />
      <Footer />
    </main>
  );
}
