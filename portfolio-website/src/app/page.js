import HeroSection from "./sections/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div class="container mx-auto px-12 py-6">
        <HeroSection />
      </div>
    </main>
  );
}
