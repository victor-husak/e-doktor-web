import NextImage from "next/image";

import * as Components from "./components";

import { clsx } from "clsx";

export type HomeHeaderSuiteProps = {
  className?: string;
};

export const HomeHeaderSuite: React.FC<HomeHeaderSuiteProps> = (
  props,
): React.JSX.Element => {
  return (
    <section
      className={clsx(
        props.className,
        "container flex justify-between gap-[50px] pt-[100px] pb-20",
      )}
    >
      {/* Content */}
      <div className="flex flex-1 flex-col">
        {/* Info */}
        <div>
          {/* Title */}
          <h2
            className={clsx(
              "font-sf-compact-display mb-[25px] text-[38px]/[45px] font-semibold tracking-[-.024em]",
              "[&>span]:text-[#AEB2C1]",
            )}
          >
            A complete suite
            <br />
            <span>of healthcare features</span>
          </h2>

          {/* Description */}
          <p className="max-w-[560px] text-[15px]/[20px] text-[#828891]">
            eDoktor gives patients instant access to essential healthcare
            services — all in one easy-to-use app. From appointment booking to
            digital prescriptions, the app is built to modernize the entire care
            journey and reduce administrative workload for clinics.
          </p>
        </div>

        {/* Items */}
        <div className="mt-auto">
          {items.map((item, index) => (
            <Components.Item
              className={clsx({ "border-t": index === 0 })}
              title={item.title}
              description={item.description}
              key={item.id}
            />
          ))}
        </div>
      </div>

      {/* Preview */}
      <NextImage
        className="h-[620px] w-auto rounded-lg bg-[#F5F5F7] object-contain"
        src="/images/home/suite.webp"
        width={1470}
        height={1170}
        alt="preview"
      />
    </section>
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
