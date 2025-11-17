import NextLink from "next/link";

import * as Icons from "./icons";

import { clsx } from "clsx";

export type RootLayoutHeaderMenuItemProps = {
  className?: string;
  title: string;
  href?: string;
  variant?: "base" | "invert";
};

export const RootLayoutHeaderMenuItem: React.FC<
  RootLayoutHeaderMenuItemProps
> = (props): React.JSX.Element => {
  return (
    <li
      className={clsx(
        props.className,
        "flex h-[29px] cursor-pointer items-center justify-between gap-1.5 rounded-full px-2.5 py-1.5 text-[14px]/[16px] tracking-[-.012em] transition-colors",
        "hover:bg-[#EDEDEF]",
        { "text-white": props.variant === "invert" },
      )}
    >
      {/* title */}
      {props.href ? (
        <NextLink href={props.href}>{props.title}</NextLink>
      ) : (
        <span>{props.title}</span>
      )}

      {!props.href && (
        <Icons.Arrow
          className={clsx({
            "[&>path]:fill-white": props.variant === "invert",
          })}
        />
      )}
    </li>
  );
};
