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
          <Components.Menu title="Product" items={productOptions} />

          <Components.Menu title="Support" items={supportOptions} />

          <Components.Menu title="Contact" items={contactOptions} />

          <Components.Menu title="Download" items={downloadOptions} />
        </div>
      </div>

      <Components.Meta />

      <Components.Bottom />
    </footer>
  );
};

const productOptions: MenuProps["items"] = [
  { key: "1", title: "Features" },
  { key: "2", title: "How it works" },
  { key: "3", title: "Privacy and security" },
  { key: "4", title: "Download the app" },
];

const supportOptions: MenuProps["items"] = [
  { key: "1", title: "Contact us" },
  { key: "2", title: "Help Center" },
  { key: "3", title: "Book a demo" },
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
