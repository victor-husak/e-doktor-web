import * as Components from "./components";

import { type MenuProps } from "./components";

import { clsx } from "clsx";

export type RootLayoutFooterProps = {
  className?: string;
};

export const RootLayoutFooter: React.FC<RootLayoutFooterProps> = (
  props,
): React.JSX.Element => {
  return (
    <footer className={clsx(props.className, "bg-footer-background container")}>
      <Components.Topline />

      {/* Content */}
      <div
        className={clsx(
          props.className,
          "border-footer-border flex flex-col gap-10 border-b pt-15 pb-15",
          "xl:flex-row xl:pb-20",
        )}
      >
        {/* Info */}
        <Components.Info />

        {/* Menu */}
        <div
          className={clsx(
            "grid flex-1 grid-cols-2 gap-x-[70px] gap-y-10",
            "md:flex",
            "xl:ml-1 xl:justify-center",
          )}
        >
          <Components.Menu
            translation="layout.footer.menu.product"
            items={productOptions}
          />

          <Components.Menu
            translation="layout.footer.menu.support"
            items={supportOptions}
          />

          <Components.Menu
            translation="layout.footer.menu.contact"
            items={contactOptions}
          />

          <Components.Menu
            translation="layout.footer.menu.download"
            items={downloadOptions}
          />
        </div>
      </div>

      <Components.Meta />

      <Components.Bottom />
    </footer>
  );
};

const productOptions: MenuProps["items"] = [
  { key: "1", title: "features", withTranslation: true },
  { key: "2", title: "how-it-works", withTranslation: true },
  { key: "3", title: "privacy-and-security", withTranslation: true },
  { key: "4", title: "download-the-app", withTranslation: true },
];

const supportOptions: MenuProps["items"] = [
  { key: "1", title: "contact-us", withTranslation: true },
  { key: "2", title: "help-center", withTranslation: true },
  { key: "3", title: "book-demo", withTranslation: true },
];

const contactOptions: MenuProps["items"] = [
  { key: "1", title: "info@edoktor.al" },
  { key: "2", title: "+355 XX XXX XXXX" },
  { key: "3", title: "Instagram" },
  { key: "4", title: "Facebook" },
  { key: "5", title: "LinkedIn" },
];

const downloadOptions: MenuProps["items"] = [
  { key: "1", title: "App Store" },
  { key: "2", title: "Google Play" },
];
