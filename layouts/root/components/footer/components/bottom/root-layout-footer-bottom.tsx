import * as Components from "./components";
import * as Icons from "./icons";

import NextLink from "next/link";

import { clsx } from "clsx";

export type RootLayoutFooterBottomProps = {
  className?: string;
};

export const RootLayoutFooterBottom: React.FC<RootLayoutFooterBottomProps> = (
  props,
): React.JSX.Element => {
  return (
    <div
      className={clsx(
        props.className,
        "flex items-center pt-[21px] pb-6 text-[14px]/[16px] tracking-[-.008em] text-[#808181]",
      )}
    >
      {/* social */}
      <div className="flex items-center gap-1.5">
        <Components.Social IconComponent={<Icons.Facebook />} />

        <Components.Social IconComponent={<Icons.Likedin />} />

        <Components.Social IconComponent={<Icons.Youtube />} />
      </div>

      {/* hr */}
      <div className="bg-footer-border mx-[15px] h-2.5 w-px" />

      {/* copyright */}
      <p className="mr-[25px]">2025 eDoktor. All rights reserved.</p>

      {/* menu */}
      <ul
        className={clsx(
          "flex items-center gap-6",
          "[&>li]:transition-colors [&>li]:hover:text-white",
        )}
      >
        <li>
          <NextLink href="/legal-compliance">Legal & Compliance</NextLink>
        </li>

        <li>
          <NextLink href="/cookie-preferences">Cookie Preferences</NextLink>
        </li>

        <li>
          <NextLink href="/privacy-policy">Privacy Policy</NextLink>
        </li>
      </ul>
    </div>
  );
};
