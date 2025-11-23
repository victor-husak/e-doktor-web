"use client";

import { FaqsSection, FaqsSectionItem } from "@/sections/faqs";

import { useHomeHeaderSuite } from "./home-header-suite.hook";

import { clsx } from "clsx";

export type HomeHeaderSuiteProps = {
  className?: string;
};

export const HomeHeaderSuite: React.FC<HomeHeaderSuiteProps> = (
  props,
): React.JSX.Element => {
  const { activeId, onChangeActiveId } = useHomeHeaderSuite();

  return (
    <FaqsSection
      className="scroll-mt-15"
      id="who-we-help"
      tag="Who we help?"
      title={
        <>
          A complete suite
          <br />
          <span>of healthcare features</span>
        </>
      }
      description="eDoktor gives patients instant access to essential healthcare services — all in one easy-to-use app. From appointment booking to digital prescriptions, the app is built to modernize the entire care journey and reduce administrative workload for clinics."
    >
      {items.map((item, index) => (
        <FaqsSectionItem
          className={clsx({ "border-t": index === 0 })}
          id={item.id}
          title={item.title}
          active={item.id === activeId}
          key={item.id}
          onOpen={onChangeActiveId}
        >
          <p className="mr-10 pb-5 text-[14px]/[19px] text-[#838993]">
            {item.description}
          </p>
        </FaqsSectionItem>
      ))}
    </FaqsSection>
  );
};

const items = [
  {
    id: 1,
    title: "Appointment Booking",
    description:
      "Patients can schedule visits with doctors in seconds. Real-time availability, instant confirmations, and automated reminders ensure a smoother experience for everyone.",
  },
  {
    id: 2,
    title: "Vaccinations Module",
    description:
      "Patients can schedule visits with doctors in seconds. Real-time availability, instant confirmations, and automated reminders ensure a smoother experience for everyone.",
  },
  {
    id: 3,
    title: "Digital Prescriptions",
    description:
      "Patients can schedule visits with doctors in seconds. Real-time availability, instant confirmations, and automated reminders ensure a smoother experience for everyone.",
  },
  {
    id: 4,
    title: "Doctor Chat",
    description:
      "Patients can schedule visits with doctors in seconds. Real-time availability, instant confirmations, and automated reminders ensure a smoother experience for everyone.",
  },
];
