import NextLink from "next/link";

import { PlusIcon } from "@/icons";

import { useTranslations } from "next-intl";

import { clsx } from "clsx";

export type RootLayoutInfoProps = {
  className?: string;
};

export const RootLayoutInfo: React.FC<RootLayoutInfoProps> = (
  props,
): React.JSX.Element => {
  const t = useTranslations("layout.info");

  return (
    <div
      className={clsx(
        props.className,
        "container flex min-h-[38px] items-center justify-center bg-[#7C78ED] py-2",
      )}
    >
      <p className="text-[13px]/[16px] text-white/80 [--link-dashed-border-color:rgba(255,255,255,0.5)]">
        {t("description.0")}{" "}
        <span className="link-dashed text-white">{t("description.1")}</span>{" "}
        {t("description.2")}{" "}
        <NextLink
          className={clsx(
            "inline-flex items-center gap-[5px] transition-opacity",
            "hover:opacity-80",
          )}
          href="/"
        >
          <span className="text-white">{t("description.3")}</span>

          <PlusIcon />
        </NextLink>
      </p>
    </div>
  );
};
