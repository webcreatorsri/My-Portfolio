import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import MusicToggle from '@/components/MusicToggle';
import Chatbot from '@/components/Chatbot';

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="certifications">
        <Certifications />
      </section>
      <section id="contact">
        <Contact />
      </section>

      {/* ✅ Add these two inside <main>, at the end */}
      <Chatbot />
      <MusicToggle />
    </main>
  );
}
