import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Ecosystem from "@/components/sections/Ecosystem";
import Themes from "@/components/sections/Themes";
import Speakers from "@/components/sections/Speakers";
import ExpoExperienceZones from "@/components/sections/ExpoExperienceZones";
import FeaturedAgenda from "@/components/sections/FeaturedAgenda";
import PartnersSponsors from "@/components/sections/PartnersSponsors";
import StartupShowcase from "@/components/sections/StartupShowcase";
import InvestorBusinessMatching from "@/components/sections/InvestorBusinessMatching";
import TicketCTA from "@/components/sections/TicketCTA";
import FAQSection from "@/components/sections/FAQSection";
import FloatingCountdown from "@/components/sections/FloatingCountdown";
import MegaFooter from "@/components/layout/MegaFooter";

export default function HomePage() {
  return (
    <main>

      <Navbar />

      <Hero />

      <Stats />

      <Ecosystem />

      <Themes />

      <Speakers />

      <ExpoExperienceZones />

      <FeaturedAgenda />

      <PartnersSponsors />

      <StartupShowcase />

      <InvestorBusinessMatching />

      <TicketCTA />

      <FAQSection />

      <FloatingCountdown />

      <MegaFooter />

    </main>
  );
}