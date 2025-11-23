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
      <div
        className={clsx(
          "relative z-1 flex max-w-[450px] flex-col items-start pt-20 pb-[22px]",
          "lg:pt-[135px]",
        )}
      >
        {/* Tag */}
        <div className="mb-[21px] rounded-full bg-[#E2E2E2] px-2 py-[5px] text-[12px]/[14px] font-medium tracking-[-.016em]">
          <span>Welcome to eDoktor</span>
        </div>

        {/* Title */}
        <h1 className="font-sf-compact-display mb-[25px] max-w-[422px] text-[38px]/[44px] font-semibold tracking-[-.024em] text-[#323233]">
          <span className="text-[#A1A1A5]">The national digital</span>
          <br />
          health platform of Albania
        </h1>

        {/* Description */}
        <p className="mb-[25px] text-[14px]/[18px] text-[#828891]">
          A unified, secure, modern health platform that connects all essential
          healthcare services in one place. Built for citizens. Empowering
          healthcare professionals. Enabling institutions.
        </p>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          <Button
            title="Book presentation"
            animation="scale"
            IconComponent={<BookIcon />}
          />

          <Button
            className="before:bg-[#E2E2E2]"
            variant="second"
            title="Download app"
            animation="scale"
            IconComponent={<DownloadIcon color="#1D1D1F" />}
          />
        </div>

        {/* Info */}
        <p className="mt-[82px] max-w-[380px] text-[12px]/[16px] text-[#A3A7AD]">
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
      <Components.Background className={clsx("hidden", "lg:flex")} />
    </header>
  );
};
