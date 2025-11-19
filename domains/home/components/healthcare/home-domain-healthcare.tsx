import NextImage from "next/image";

import { Section, SectionHeader, Button } from "@/components";

import { VideoIcon, DownloadIcon } from "@/icons";

import * as Components from "./components";
import * as Icons from "./icons";

import { clsx } from "clsx";

export type HomeDomainHealthcareProps = {
  className?: string;
};

export const HomeDomainHealthcare: React.FC<HomeDomainHealthcareProps> = (
  props,
): React.JSX.Element => {
  return (
    <Section
      className={clsx(props.className, "")}
      HeaderComponent={
        <SectionHeader
          className="pt-[27px] pb-20"
          title={
            <>
              Healthcare
              <br />
              <span>that feels easy</span>
            </>
          }
          description="A unified, modern app that connects patients with doctors, clinics, prescriptions, vaccination records, and digital health services — all in one simple experience."
          ActionComponent={
            <>
              <Button
                animation="scale"
                title="Book a demo"
                IconComponent={<VideoIcon />}
              />

              <Button
                variant="second"
                animation="scale"
                title="Download app"
                IconComponent={<DownloadIcon color="#1D1D1F" />}
              />
            </>
          }
        />
      }
    >
      {/* Container */}
      <div className=" group relative flex justify-between rounded-xl bg-[#E0D9FF] pt-[30px] pr-[30px] pb-10 pl-[50px]">
        {/* Content */}
        <div className="flex flex-col items-start pt-2.5">
          {/* Tag */}
          <div className="mb-[25px] flex items-center gap-2 rounded-full bg-[#7C78ED] px-2.5 py-[5px] text-[12px]/[14px] font-medium tracking-[-.016em] text-white">
            <Icons.Booking />

            <span>Booking</span>
          </div>

          {/* Title */}
          <h3 className="font-sf-compact-display mb-[25px] text-[32px]/[38px] font-semibold tracking-[-.016em]">
            <span className="text-[#7C78ED]">Easy-to-use</span>
            <br />
            appointment booking
          </h3>

          {/* Description */}
          <p className="mb-[30px] max-w-[580px] text-[14px]/[19px] tracking-[-.008em] text-[#3A364D]">
            A seamless way for patients to schedule visits in seconds. eDoktor
            connects with clinics, doctors, and local health systems to deliver
            real-time availability and instant confirmations.
          </p>

          {/* List */}
          <Components.List />

          {/* Actions */}
          <div className="mt-auto flex gap-1.5">
            <Components.Arrow className="rotate-180" />

            <Components.Arrow />
          </div>
        </div>

        {/* Preview */}

        <div className="h-[390px] overflow-hidden rounded-lg bg-[#D4CDF4]">
          <NextImage
            className="transition-img h-full w-auto group-hover:transform-[scale(1.03)]"
            src="/images/home/healthcare.webp"
            width={1470}
            height={1170}
            alt="preview"
          />
        </div>

        {/* Background */}
        <NextImage
          className="absolute -right-2 -bottom-2.5 left-2 -z-1 h-full w-[calc(100%-16px)] rounded-2xl"
          src="/images/home/healthcare-bg.webp"
          width={2528}
          height={940}
          alt="preview"
        />
      </div>
    </Section>
  );
};
