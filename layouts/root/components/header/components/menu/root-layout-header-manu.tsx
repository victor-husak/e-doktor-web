import * as Components from "./components";

import { useTranslations } from "next-intl";

import { clsx } from "clsx";

export type RootLayoutHeaderManuProps = {
  className?: string;
};

export const RootLayoutHeaderManu: React.FC<RootLayoutHeaderManuProps> = (
  props,
): React.JSX.Element => {
  const t = useTranslations("layout.header.menu");

  return (
    <menu className={clsx(props.className, "flex items-center gap-[5px]")}>
      <Components.Item href="#platform" title={t("platform")} />

      <Components.Item href="#who-we-help" title={t("for-citizens")} />

      <Components.Item href="#features" title={t("features")} />

      <Components.Item href="#what-we-offer" title={t("data-security")} />

      <Components.Item href="#footer" title={t("contact")} />
    </menu>
  );
};
