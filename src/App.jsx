import { useRef } from 'react'
import Navbar from './components/Navbar'
import BackToTop from './components/ui/BackToTop'
import HeroBackdrop from './components/HeroBackdrop'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ExpertiseSection from './components/ExpertiseSection'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import ExperienceTimeline from './components/ExperienceTimeline'
import ProcessSection from './components/ProcessSection'
import ServicesSection from './components/ServicesSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function App() {
  const heroRef = useRef(null)

  return (
    <div className="relative isolate min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Fine film grain over the whole page for premium depth */}
      <div
        aria-hidden="true"
        className="bg-noise pointer-events-none fixed inset-0 z-30 opacity-[0.04] mix-blend-overlay"
      />

      {/* Fixed, scroll-driven hero visual sitting behind all page content */}
      <HeroBackdrop heroRef={heroRef} />

      <main className="relative z-10">
        <HeroSection heroRef={heroRef} />
        {/* Sections after the hero get a solid background so they cleanly
            cover the (faded) backdrop as you scroll past it. */}
        <div className="relative z-10 bg-navy-950">
          {/* Soft shadow-like blend from the hero image into the page
              background — avoids a hard horizontal seam at the Hero→About edge. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-56 h-56 bg-gradient-to-b from-transparent via-navy-950/85 to-navy-950"
          />
          {/* Alternating subtle bands give the long page a gentle rhythm. */}
          <AboutSection />
          <div className="section-alt">
            <ExpertiseSection />
          </div>
          <ProjectsSection />
          <div className="section-alt">
            <SkillsSection />
          </div>
          <ExperienceTimeline />
          <div className="section-alt">
            <ProcessSection />
          </div>
          <ServicesSection />
          <div className="section-alt">
            <ContactSection />
          </div>
          <Footer />
        </div>
      </main>

      <BackToTop />
    </div>
  )
}
