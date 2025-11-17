import NextLink from "next/link";

import { clsx } from "clsx";

export type RootLayoutFooterMenuItemProps = {
  className?: string;
  title: string;
  href?: string;
};

export const RootLayoutFooterMenuItem: React.FC<
  RootLayoutFooterMenuItemProps
> = (props): React.JSX.Element => {
  return (
    <li
      className={clsx(
        props.className,
        "underline-hover relative flex cursor-pointer items-center py-[6.5px] text-[14px]/[16px] leading-[-0.008em] text-[#8C8F91] transition-all",
        "hover:text-white",
      )}
    >
      {props.href ? (
        <NextLink href={props.href}>{props.title}</NextLink>
      ) : (
        props.title
      )}
    </li>
  );
};
