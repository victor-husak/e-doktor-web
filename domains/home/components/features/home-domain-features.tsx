import { Section, SectionHeader } from "@/components";

import * as Components from "./components";

import { clsx } from "clsx";

import { useTranslations } from "next-intl";

export type HomeDomainFeaturesProps = {
  className?: string;
};

export const HomeDomainFeatures: React.FC<HomeDomainFeaturesProps> = (
  props,
): React.JSX.Element => {
  const t = useTranslations("pages.home.features");

  return (
    <Section
      className={clsx(props.className, "relative scroll-mt-15")}
      id="features"
      HeaderComponent={
        <SectionHeader
          classNameDescription="max-w-[460px]"
          title={t("header.title")}
          description={t("header.description")}
        />
      }
    >
      {/* Content */}
      <div
        className={clsx(
          "grid grid-cols-1 gap-x-10",
          "md:grid-cols-2 lg:grid-cols-3",
        )}
      >
        {items.map((item, index) => (
          // Item
          <Components.Item
            className="nth-last-[-n+3]:border-b"
            title={t(`items.${index}.title`)}
            description={t(`items.${index}.description`)}
            key={item.id}
          />
        ))}
      </div>
    </Section>
  );
};

const items = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
  {
    id: 7,
  },
  {
    id: 8,
  },
  {
    id: 9,
  },
];
