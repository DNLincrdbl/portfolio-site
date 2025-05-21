import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Technologies from '@/components/Technologies';
import Footer from '@/components/Footer';
import Timeline from '@/components/Timeline';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Technologies />
      <Timeline />
      <Footer />
    </main>
  );
} 