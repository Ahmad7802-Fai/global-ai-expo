import Hero from "@/components/home/hero/Hero";

import Stats from "@/components/home/stats/Stats";

import Ecosystem
from "@/components/home/ecosystem/Ecosystem";

import Themes
from "@/components/home/themes/Themes";

import Speakers
from "@/components/home/speakers/Speakers";

import ExpoExperienceZones
from "@/components/home/expo-zones/ExpoExperienceZones";

import FeaturedAgenda
from "@/components/home/agenda/FeaturedAgenda";

import PartnersSponsors
from "@/components/home/partners/PartnersSponsors";

import StartupShowcase
from "@/components/home/startup-showcase/StartupShowcase";

import InvestorBusinessMatching
from "@/components/home/investors/InvestorBusinessMatching";

import TicketCTA
from "@/components/home/ticket-cta/TicketCTA";

import FAQSection
from "@/components/home/faq/FAQSection";

export default function HomePage() {

  return (
    <main
      className="
        relative
        overflow-hidden

        bg-[#040B08]
      "
    >

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

    </main>
  );
}