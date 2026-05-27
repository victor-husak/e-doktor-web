import { PointsItem } from "./PointsItem";

import { useTranslations } from "next-intl";

import { clsx } from "clsx";

export type PointsProps = {
  className?: string;
};

export const Points: React.FC<PointsProps> = (props): React.JSX.Element => {
  const t = useTranslations("pages.home.points");

  return (
    <section
      className={clsx(
        props.className,
        "relative container grid grid-cols-1 gap-5 pt-5",
        "sm:grid-cols-2 lg:grid-cols-3",
      )}
    >
      <PointsItem
        title={t("0.title")}
        description={t("0.description")}
        src="/images/home/points/1.png"
      />

      <PointsItem
        title={t("1.title")}
        description={t("1.description")}
        src="/images/home/points/2.png"
      />

      <PointsItem
        title={t("2.title")}
        description={t("2.description")}
        src="/images/home/points/3.png"
      />
    </section>
  );
};
