import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";

import AwardSection from "@/components/AwardSection";
import RecommendationsSection from "@/components/RecommendationsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      
      <AwardSection />
      <RecommendationsSection />
      <ContactSection />
      <footer className="py-8 text-center text-muted-foreground text-xs border-t border-border">
        © 2026 Meghna Singh. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
