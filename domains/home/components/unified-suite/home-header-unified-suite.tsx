"use client";

import NextLink from "next/link";

import { FaqsSection, FaqsSectionItem } from "@/sections/faqs";

import { PlusIcon } from "@/icons";

import * as Components from "./components";

import { useHomeHeaderUnifiedSuite } from "./home-header-unified-suite.hook";

import { clsx } from "clsx";

export type HomeHeaderUnifiedSuiteProps = {
  className?: string;
};

export const HomeHeaderUnifiedSuite: React.FC<HomeHeaderUnifiedSuiteProps> = (
  props,
): React.JSX.Element => {
  const { activeId, onChangeActiveId } = useHomeHeaderUnifiedSuite();

  return (
    <FaqsSection
      reverse
      className="scroll-mt-15"
      id="what-we-offer"
      tag="What we offer"
      title={
        <>
          A unified suite of
          <br />
          <span>digital health services</span>
        </>
      }
      description={
        <>
          eDoctor brings together all healthcare services into one seamless,
          secure and user-friendly platform. Each service is designed to
          simplify the patient journey, support medical professionals.{" "}
          <NextLink
            className={clsx(
              "link-dashed inline-flex items-center gap-[5px] text-[#7C78ED] transition-opacity [--link-dashed-border-color:currentColor]",
              "hover:opacity-60",
            )}
            href="/"
          >
            <span>Read more</span>

            <PlusIcon color="#7C78ED" />
          </NextLink>
        </>
      }
    >
      <div className="xl:mt-[69px]">
        {items.map((item, index) => (
          <FaqsSectionItem
            className={clsx({ "border-t": index === 0 })}
            title={item.title}
            id={item.id}
            active={item.id === activeId}
            key={item.id}
            onOpen={onChangeActiveId}
          >
            {/* Container */}
            <div
              className={clsx(
                props.className,
                "flex flex-col gap-[25px] pb-[25px]",
              )}
            >
              {/* Title */}
              <p className="mr-10 text-[14px]/[20px] text-[#838993]">
                Citizens can communicate with their family doctor through:
              </p>

              {/* Grid */}
              <div
                className={clsx("grid grid-cols-1 gap-2.5", "sm:grid-cols-2")}
              >
                <Components.Item />

                <Components.Item />

                <Components.Item />
              </div>
            </div>
          </FaqsSectionItem>
        ))}
      </div>
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
