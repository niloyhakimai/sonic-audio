import { Navbar } from "@/components/Navbar";
import { SonicHero } from "@/components/SonicHero";
import { SoundEngineering } from "@/components/SoundEngineering"; // New
import { ImmersiveGallery } from "@/components/ImmersiveGallery"; // New
import { SonicFooter } from "@/components/SonicFooter"; // New

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <SonicHero />
      <SoundEngineering />
      <ImmersiveGallery />
      <SonicFooter />
    </main>
  );
}