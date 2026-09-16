import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Section } from "@/components/Section";
import { Skills } from "@/components/Skills";
import { profile } from "@/data/resume";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1 divide-y divide-white/5">
        <Hero />

        <Section id="about" eyebrow="About" title="Summary">
          <div className="max-w-3xl space-y-5">
            {profile.summary.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-relaxed text-slate-400">
                {paragraph}
              </p>
            ))}
          </div>
        </Section>

        <Section id="experience" eyebrow="Career" title="Experience">
          <Experience />
        </Section>

        <Section id="skills" eyebrow="Toolbox" title="Skills & Certifications">
          <Skills />
        </Section>

        <Section id="education" eyebrow="Background" title="Education & Awards">
          <Education />
        </Section>

        <Section id="contact" eyebrow="Contact" title="Let's work together">
          <Contact />
        </Section>
      </main>

      <footer className="border-t border-white/5 py-8">
        <div className="mx-auto w-full max-w-5xl px-6 text-xs text-slate-600">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js and
          Tailwind CSS.
        </div>
      </footer>
    </>
  );
}
