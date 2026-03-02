import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import AwardSection from "@/components/AwardSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import RecommendationsSection from "@/components/RecommendationsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <AwardSection />
      <RecommendationsSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
      <footer className="py-8 text-center text-muted-foreground text-xs border-t border-border">
        © 2026 Meghna Singh. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
