import { ButtonDownload, ButtonWatch } from "@/components";

import { BookIcon, DownloadIcon } from "@/icons";

import { HeaderBackground } from "./background";

import { useTranslations } from "next-intl";

import { clsx } from "clsx";

export type HeaderProps = {
  className?: string;
};

export const Header: React.FC<HeaderProps> = (props): React.JSX.Element => {
  const t = useTranslations("pages.home.header");
  const tCommonActions = useTranslations("common.actions");

  return (
    <header
      id="platform"
      className={clsx(
        props.className,
        "container-small relative scroll-mt-40 overflow-hidden bg-[#EFEFF0]",
      )}
    >
      {/* Content */}
      <div
        className={clsx(
          "relative z-1 flex max-w-[450px] flex-col items-start pt-20 pb-[22px]",
          "lg:pt-[135px]",
        )}
      >
        {/* Tag */}
        <div className="py-xxs mb-[21px] rounded-full bg-[#E2E2E2] px-2 text-[12px]/[14px] font-medium tracking-[-.016em]">
          <span>{t("tag")}</span>
        </div>

        {/* Title */}
        <h1 className="font-sf-compact-display mb-xl max-w-[450px] text-[38px]/[44px] font-semibold tracking-[-.024em] text-[#323233]">
          <span className="text-[#A1A1A5]">{t("title.0")}</span>
          <br />
          {t("title.1")}
        </h1>

        {/* Description */}
        <p className="mb-xl text-[14px]/[18px] text-[#828891]">
          {t("description")}
        </p>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          <ButtonWatch
            title={tCommonActions("watch-demo")}
            animation="scale"
            IconComponent={<BookIcon />}
          />

          <ButtonDownload
            className="before:bg-[#E2E2E2]"
            variant="second"
            title={tCommonActions("download-app")}
            animation="scale"
            IconComponent={<DownloadIcon color="#1D1D1F" />}
          />
        </div>

        {/* Info */}
        <p className="mt-[82px] max-w-[380px] text-[12px]/[16px] text-[#A3A7AD]">
          {t("info")}
        </p>
      </div>

      {/* Background */}
      <HeaderBackground className={clsx("hidden", "lg:flex")} />
    </header>
  );
};
