import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import Skills from '@/components/Skills';
import Internships from '@/components/Internships';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <Projects />
      <Education />
      <Certifications />
      <Skills />
      <Internships />
      <Contact />
    </main>
  );
};

export default Index;
