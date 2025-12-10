import * as Components from "./components";
import * as Icons from "./icons";

import { useTranslations } from "next-intl";

import { clsx } from "clsx";

export type HomeDomainPointsProps = {
  className?: string;
};

export const HomeDomainPoints: React.FC<HomeDomainPointsProps> = (
  props,
): React.JSX.Element => {
  const t = useTranslations("pages.home.points");

  return (
    <section
      className={clsx(
        props.className,
        "relative container grid grid-cols-1 gap-5 pt-5",
        "sm:grid-cols-2 lg:grid-cols-3",
      )}
    >
      <Components.Item
        title={t("0.title")}
        description={t("0.description")}
        IconComponent={<Icons.Trust />}
      />

      <Components.Item
        title={t("1.title")}
        description={t("1.description")}
        IconComponent={<Icons.Modern />}
      />

      <Components.Item
        title={t("2.title")}
        description={t("2.description")}
        IconComponent={<Icons.Connected />}
      />
    </section>
  );
};
