"use client";

import NextImage from "next/image";

import { clsx } from "clsx";

import { useHomeDomainHeader } from "./useHeaderBackground";

export type HeaderBackgroundProps = {
  className?: string;
};

export const HeaderBackground: React.FC<HeaderBackgroundProps> = (
  props,
): React.JSX.Element => {
  useHomeDomainHeader();

  return (
    <NextImage
      id="layer-back"
      className={clsx(
        props.className,
        "absolute inset-0 -top-[38px] h-[calc(100%+38px)] object-contain object-bottom will-change-transform",
      )}
      width={6200}
      height={2451}
      src="/images/home/main_page_wallpaper.webp"
      alt="header"
    />
  );
};
