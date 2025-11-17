"use client";

import NextImage from "next/image";

import { clsx } from "clsx";

import { useHomeDomainHeader } from "./home-domain-header-background.hook";

export type HomeDomainHeaderBackgroundProps = {
  className?: string;
};

export const HomeDomainHeaderBackground: React.FC<
  HomeDomainHeaderBackgroundProps
> = (props): React.JSX.Element => {
  useHomeDomainHeader();

  return (
    <NextImage
      id="layer-back"
      className={clsx(
        props.className,
        "absolute inset-0 -top-[38px] h-[calc(100%+38px)] object-contain object-bottom will-change-transform",
      )}
      width={2732}
      height={1080}
      src="/images/home/header1.webp"
      alt="header"
    />
  );
};
