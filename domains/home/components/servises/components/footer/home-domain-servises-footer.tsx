import NextLink from "next/link";

import { useTranslations } from "next-intl";

import { clsx } from "clsx";

export type HomeDomainServisesFooterProps = {
  className?: string;
};

export const HomeDomainServisesFooter: React.FC<
  HomeDomainServisesFooterProps
> = (props): React.JSX.Element => {
  const t = useTranslations("pages.home.services.footer");

  return (
    <footer
      className={clsx(
        props.className,
        "[--link-dashed-border-color:#D1D3D9]",
        "flex flex-col justify-between gap-y-2 border-b border-[#F4F5F7] pt-[27px] pb-[25px] text-[13px]/[16px] tracking-[-.008em] text-[#8E8C8A]",
        "lg:flex-row lg:items-center",
        "[&>p>a]:text-[#2C2C2C] [&>p>a]:transition-opacity",
        // "[&>p>a]:hover:opacity-70",
      )}
    >
      <p>
        {t("help.0")}{" "}
        <span className="link-dashed text-[#2C2C2C]">{t("help.1")}</span>
      </p>

      <p>
        {t("questions")}{" "}
        <NextLink className="link-dashed" href="mailto:office@edoktor.al">
          office@edoktor.al
        </NextLink>
      </p>
    </footer>
  );
};
