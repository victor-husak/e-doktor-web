import * as Components from "./components";
import * as Icons from "./icons";

import NextLink from "next/link";

import { useTranslations } from "next-intl";

import { clsx } from "clsx";

export type RootLayoutFooterBottomProps = {
  className?: string;
};

export const RootLayoutFooterBottom: React.FC<RootLayoutFooterBottomProps> = (
  props,
): React.JSX.Element => {
  const t = useTranslations("layout.footer.bottom");

  return (
    <div
      className={clsx(
        props.className,
        "flex flex-wrap items-center gap-x-3 gap-y-[25] pt-[21px] pb-6 text-[14px]/[16px] tracking-[-.008em] text-[#808181]",
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
      <p className={clsx("order-last mr-[25px]", "md:order-0")}>
        2025 eDoktor. {t("copyright")}
      </p>

      {/* menu */}
      <ul
        className={clsx(
          "flex flex-wrap items-center gap-x-[25] gap-y-[15px]",
          "[&>li]:transition-colors [&>li]:hover:text-white",
        )}
      >
        <li>
          <NextLink href="/legal-compliance">{t("legal-compliance")}</NextLink>
        </li>

        <li>
          <NextLink href="/cookie-preferences">
            {t("cookie-preferences")}
          </NextLink>
        </li>

        <li>
          <NextLink href="/privacy-policy">{t("privacy-policy")}</NextLink>
        </li>
      </ul>
    </div>
  );
};
