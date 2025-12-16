import { Lang } from "@/components";

import { useTranslations } from "next-intl";

import { clsx } from "clsx";

export type RootLayoutToplineProps = {
  className?: string;
};

export const RootLayoutTopline: React.FC<RootLayoutToplineProps> = (
  props,
): React.JSX.Element => {
  const t = useTranslations("layout.topline");

  return (
    <div
      className={clsx(
        props.className,
        "bg-topline-background relative container flex min-h-[38px] items-center justify-between gap-2 py-1.5",
        "xl:justify-end",
      )}
    >
      {/* Description */}
      <p
        className={clsx(
          "text-topline-foreground flex-1 text-[13px]/[16px]",
          "xl:absolute xl:right-0 xl:left-0 xl:text-center",
        )}
      >
        {t("description.0")} — <span>{t("description.1")}</span>
      </p>

      {/* Logo */}
      <Lang className="z-1" />
    </div>
  );
};
