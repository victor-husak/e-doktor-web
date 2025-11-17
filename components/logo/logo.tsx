"use client";

import NextImage from "next/image";
import NextLink from "next/link";

import { usePathname } from "next/navigation";

import { clsx } from "clsx";

export type LogoProps = {
  className?: string;
  variant?: "base" | "invert";
};

export const Logo: React.FC<LogoProps> = (props): React.JSX.Element => {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/" ? (
        <LogoImage className={props.className} variant={props.variant} />
      ) : (
        <NextLink
          className={clsx(
            "transition-opacity",
            "hover:opacity-60",
            props.className,
          )}
          href="/"
        >
          <LogoImage variant={props.variant} />
        </NextLink>
      )}
    </>
  );
};

type LogoImageProps = {
  className?: string;
  variant?: LogoProps["variant"];
};

const LogoImage: React.FC<LogoImageProps> = (props): React.JSX.Element => {
  return (
    <NextImage
      className={clsx("h-[30px] w-[98px]", props.className)}
      src={
        props.variant === "invert"
          ? "/images/logo-white.webp"
          : "/images/logo.webp"
      }
      alt="logo"
      width={297}
      height={90}
    />
  );
};
