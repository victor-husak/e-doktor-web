import { clsx } from "clsx";

import { useTranslations } from "next-intl";

export type RootLayoutFooterInfoProps = {
  className?: string;
};

export const RootLayoutFooterInfo: React.FC<RootLayoutFooterInfoProps> = (
  props,
): React.JSX.Element => {
  const t = useTranslations("layout.footer.info");

  return (
    <div className={clsx(props.className, "")}>
      <p className="mb-[15px] text-[16px]/[21px] font-medium text-white">
        {t("title")}
      </p>

      <p className="w-[390px] text-[14px]/[20px] tracking-[-.008em] text-[#8C8F91]">
        {t("description")}
      </p>
    </div>
  );
};
