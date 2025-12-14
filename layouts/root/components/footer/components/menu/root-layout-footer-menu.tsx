import * as Components from "./components";

import { useTranslations } from "next-intl";

import { clsx } from "clsx";

export type RootLayoutFooterMenuProps = {
  className?: string;
  translation: string;
  items: {
    key: string;
    title: string;
    href?: string;
    target?: React.HTMLAttributeAnchorTarget;
    withTranslation?: boolean;
  }[];
};

export const RootLayoutFooterMenu: React.FC<RootLayoutFooterMenuProps> = (
  props,
): React.JSX.Element => {
  const t = useTranslations(props.translation);

  return (
    <div className={clsx(props.className, "flex flex-col gap-7.5")}>
      {/* title */}
      <span className="text-[15px]/[18px] font-semibold tracking-[-.008em] text-white">
        {t("title")}
      </span>

      {/* menu */}
      <ul className={clsx("my-[-6.5px] flex flex-col items-start")}>
        {props.items.map((item) => (
          <Components.Item
            title={item.withTranslation ? t(`items.${item.title}`) : item.title}
            href={item.href}
            target={item.target}
            key={item.key}
          />
        ))}
      </ul>
    </div>
  );
};
