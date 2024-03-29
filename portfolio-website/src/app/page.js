import HeroSection from "./sections/HeroSection";
import NavBar from "./sections/NavBar";
import AboutSection from "./sections/AboutSection";
import { Manrope } from 'next/font/google'
import ProjectSection from "./sections/ProjectSection";
import EmailSection from "./sections/EmailSection";
import Footer from "./sections/Footer";

const poppins = Manrope({ subsets: ['latin'], weight: '400' })

export default function Home() {
  return (
    <main className={`${poppins.className} flex min-h-screen flex-col bg-[#121212]`}>
      <NavBar />
      <div className="container mx-auto px-12 py-6 mt-24">
        <HeroSection />
        <AboutSection />
        <ProjectSection/>
        <EmailSection/>
        
      </div>
      <Footer/>
    </main>
  );
} 
