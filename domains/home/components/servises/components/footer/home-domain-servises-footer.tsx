import NextLink from "next/link";

import { clsx } from "clsx";

export type HomeDomainServisesFooterProps = {
  className?: string;
};

export const HomeDomainServisesFooter: React.FC<
  HomeDomainServisesFooterProps
> = (props): React.JSX.Element => {
  return (
    <footer
      className={clsx(
        props.className,
        "[--link-dashed-border-color:#D1D3D9]",
        "flex items-center justify-between border-b border-[#F4F5F7] pt-[27px] pb-[25px] text-[13px]/[16px] tracking-[-.008em] text-[#8E8C8A]",
        "[&>p>a]:text-[#2C2C2C] [&>p>a]:transition-opacity",
        "[&>p>a]:hover:opacity-70",
      )}
    >
      <p>
        We help organisations succeed with their most important{" "}
        <NextLink className="link-dashed" href="/">
          transformations
        </NextLink>
      </p>

      <p>
        Have questions? Contact us at{" "}
        <NextLink className="link-dashed" href="mailto:office@edoktor.al">
          office@edoktor.al
        </NextLink>
      </p>
    </footer>
  );
};
