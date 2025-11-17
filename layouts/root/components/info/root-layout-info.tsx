import NextLink from "next/link";

import * as Icons from "./icons";

import { clsx } from "clsx";

export type RootLayoutInfoProps = {
  className?: string;
};

export const RootLayoutInfo: React.FC<RootLayoutInfoProps> = (
  props,
): React.JSX.Element => {
  return (
    <div
      className={clsx(
        props.className,
        "container flex items-center justify-center bg-[#7C78ED] py-3",
      )}
    >
      <p className="text-[12px]/[14px] text-white/80 [--link-dashed-border-color:rgba(255,255,255,0.5)]">
        Backed by{" "}
        <span className="link-dashed text-white">StartUp Albania</span> for
        implementing innovation in healthcare.{" "}
        <NextLink
          className={clsx(
            "inline-flex items-center gap-[5px] transition-opacity",
            "hover:opacity-80",
          )}
          href="/"
        >
          <span className="link-dashed text-white">Read further</span>

          <Icons.Plus />
        </NextLink>
      </p>
    </div>
  );
};
