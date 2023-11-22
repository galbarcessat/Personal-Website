import { useState } from "react";
import { HomeAppHeader } from "./cmps/HomeAppHeader";
import { HomeHero } from "./cmps/HomeHero";
import { SkillsSection } from "./cmps/SkillsSection";
import { ProjectsSection } from "./cmps/ProjectsSection";
import { AboutMe } from "./cmps/AboutMe";
import { ContactMe } from "./cmps/ContactMe";
import { Footer } from "./cmps/Footer";


export function App() {


  const [scrolled, setScrolled] = useState(false)

  window.onscroll = function handleScroll() {
    const isScrolled = window.scrollY > 0
    setScrolled(isScrolled)
  }

  function openLinkNewTab(link) {
    window.open(link, '_blank')
  }


  return (
    <section className="main-layout">
      <HomeAppHeader scrolled={scrolled} />
      <HomeHero />
      <SkillsSection />
      <ProjectsSection openLinkNewTab={openLinkNewTab} />
      <AboutMe />
      <ContactMe openLinkNewTab={openLinkNewTab}/>
      <Footer />

    </section>
  )
}

