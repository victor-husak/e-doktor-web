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
      <Components.Item href="#what-we-offer" title={t("what-we-offer")} />

      <Components.Item href="#who-we-help" title={t("who-we-help")} />

      <Components.Item href="#features" title={t("features")} />

      <Components.Item href="#contact-us" title={t("contact-us")} />
    </menu>
  );
};
