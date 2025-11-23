import { Section, SectionHeader } from "@/components";

import * as Components from "./components";

import { clsx } from "clsx";

export type HomeDomainFeaturesProps = {
  className?: string;
};

export const HomeDomainFeatures: React.FC<HomeDomainFeaturesProps> = (
  props,
): React.JSX.Element => {
  return (
    <Section
      className={clsx(props.className, "relative scroll-mt-15")}
      id="features"
      HeaderComponent={
        <SectionHeader
          title="Other features"
          description="BeeHealthy is a configurable, white-label, digital healthcare SaaS platform with all the features for building a modern digital-physical service provision."
        />
      }
    >
      {/* Content */}
      <div className="grid grid-cols-3 gap-x-10">
        {items.map((item) => (
          // Item
          <Components.Item
            className="nth-last-[-n+3]:border-b"
            title={item.title}
            description={item.description}
            key={item.id}
          />
        ))}
      </div>
    </Section>
  );
};

const items = [
  {
    id: 1,
    title: "Appointments management",
    description:
      "Manage clinic schedules and availability with ease, enabling fast and intuitive appointment booking directly inside the app. Fully integrated with Albania’s healthcare system.",
  },
  {
    id: 2,
    title: "Medical and health records",
    description:
      "Access complete medical files, vaccination history, lab results, prescriptions, and visit summaries. Always synced and securely stored in one place.",
  },
  {
    id: 3,
    title: "Specialist doctors",
    description:
      "Find and book visits with verified specialist doctors across Albania.Browse profiles, check availability, and schedule appointments in just a few taps - fully connected to the national system.",
  },
  {
    id: 4,
    title: "Emergency call",
    description:
      "Contact a doctor immediately in urgent situations. Your location and essential info are shared automatically to ensure fast and accurate assistance.",
  },
  {
    id: 5,
    title: "Communication module",
    description:
      "Stay connected with your doctor through secure chat, voice calls, or video consultations. Share symptoms, send photos, and receive medical guidance anytime — all within the app.",
  },
  {
    id: 6,
    title: "Online pharmacy",
    description:
      "Find and purchase prescriptions directly in the app with transparent prices, discounts, and availability updates. Filter, compare, and order medicines from certified Albanian pharmacies.",
  },
  {
    id: 7,
    title: "Laboratory tests",
    description:
      "Browse your lab test history with detailed results, dates, and providers. Easily access completed reports and receive notifications when new results are available.",
  },
  {
    id: 8,
    title: "Digital prescriptions",
    description:
      "View active prescriptions, receive expiration reminders, and manage medications in one place. Automatically connected with pharmacies and healthcare providers.",
  },
  {
    id: 9,
    title: "Medical history",
    description:
      "Access a unified and chronological view of all your medical events — visits, prescriptions, vaccinations, lab results, and more. Always synced, always securely stored.",
  },
];
