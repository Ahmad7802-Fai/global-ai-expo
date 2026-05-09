export type AboutHeroStat = {
  value: string;
  label: string;
};

export type AboutHeroData = {
  badge: string;

  title: {
    first: string;
    highlight: string;
    second: string;
  };

  description: string;

  stats: AboutHeroStat[];
};

export type MissionItem = {
  title: string;
  description: string;
};

export type VisionMissionData = {
  vision: {
    title: string;
    description: string;
  };

  missions: MissionItem[];
};

export type GlobalImpactItem = {
  title: string;
  value: string;
  description: string;
};

export type WhyGlobalAIExpoItem = {
  title: string;
  description: string;
};

export type AIEcosystemItem = {
  title: string;
  description: string;
};

export type TimelineItem = {
  day: string;
  title: string;
  description: string;
};

export type OrganizerItem = {
  title: string;
  description: string;
};

export type PartnerLogoItem = string;