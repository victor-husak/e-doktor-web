import { NextLink } from "@/i18n/routing";

import { useTranslations } from "next-intl";

import styles from "./overfay-layout-footer.module.scss";

import { clsx } from "clsx";

export type OverfayLayoutFooterProps = {
  className?: string;
  onClose?: () => void;
};

export const OverfayLayoutFooter: React.FC<OverfayLayoutFooterProps> = (
  props
): React.JSX.Element => {
  const t = useTranslations("layouts.overfay.footer");

  return (
    <footer className={clsx(props.className, styles.container)}>
      <ul className={styles.content}>
        <li className={styles.item} onClick={props.onClose}>
          <NextLink className={styles.link} href="/collections/novelty">
            {t("all-goods")}
          </NextLink>
        </li>

        <li className={styles.item} onClick={props.onClose}>
          <NextLink className={styles.link} href="/collections/sale">
            {t("discounts")}
          </NextLink>
        </li>

        <li className={styles.item} onClick={props.onClose}>
          <NextLink className={styles.link} href="/delivery">
            {t("delivery")}
          </NextLink>
        </li>
      </ul>
    </footer>
  );
};
