import NextLink from "next/link";

import { clsx } from "clsx";

import { useTranslations } from "next-intl";

export type RootLayoutFooterMetaProps = {
  className?: string;
};

export const RootLayoutFooterMeta: React.FC<RootLayoutFooterMetaProps> = (
  props,
): React.JSX.Element => {
  const t = useTranslations("layout.footer.meta");

  return (
    <div className={clsx(props.className, "py-[25px]")}>
      <p className="max-w-[380px] text-[12px]/[16px] text-[#696B6F]">
        {t("description")}{" "}
        <NextLink
          className={clsx("underline transition-colors", "hover:text-white")}
          target="_blank"
          href="https://startupalbania.gov.al/"
        >
          startupalbania.gov.al
        </NextLink>
      </p>
    </div>
  );
};
