import HeroSection from "./sections/HeroSection";
import NavBar from "./sections/NavBar";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      <div class="container mx-auto px-12 py-6 mt-24">
        <HeroSection />
      </div>
    </main>
  );
}
