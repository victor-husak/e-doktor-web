import NextLink from "next/link";

import { Button } from "@/components";

import { BookIcon, DownloadIcon } from "@/icons";

import * as Components from "./components";

import { clsx } from "clsx";

export type HomeDomainHeaderProps = {
  className?: string;
};

export const HomeDomainHeader: React.FC<HomeDomainHeaderProps> = (
  props,
): React.JSX.Element => {
  return (
    <header
      className={clsx(
        props.className,
        "container-small relative overflow-hidden bg-[#EFEFF0]",
      )}
    >
      {/* Content */}
      <div className="flex max-w-[380px] flex-col items-start pt-[135px] pb-[22px]">
        {/* Tag */}
        <div className="mb-[21px] rounded-full bg-[#E2E2E2] px-2 py-[5px] text-[12px]/[14px] tracking-[-.016em]">
          <span>Integrated with e-Albania</span>
        </div>

        {/* Title */}
        <h1 className="font-sf-compact-display mb-[25px] max-w-[300px] text-[38px]/[44px] font-semibold tracking-[-.024em] text-[#323233]">
          <span className="text-[#A1A1A5]">Smart access to</span> public
          healthcare.
        </h1>

        {/* Description */}
        <p className="mb-[25px] text-[14px]/[18px]">
          From appointments to prescriptions, e-Doktor helps you stay connected
          with your doctors and manage your healthcare easily and securely in
          Albania.
        </p>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          <Button
            title="Book a demo"
            animation="scale"
            IconComponent={<BookIcon />}
          />

          <Button
            variant="second"
            title="Book a demo"
            animation="scale"
            IconComponent={<DownloadIcon color="#1D1D1F" />}
          />
        </div>

        {/* Info */}
        <p className="mt-[82px] text-[12px]/[16px] text-[#A3A7AD]">
          Backed by StartUp Albania for implementing innovation in healthcare.
          Read more on{" "}
          <NextLink
            className="text-[#7F848D] underline"
            href="https://startupalbania.gov.al/"
            target="_blank"
          >
            startupalbania.gov.al
          </NextLink>
        </p>
      </div>

      {/* Background */}
      <Components.Background />
    </header>
  );
};
