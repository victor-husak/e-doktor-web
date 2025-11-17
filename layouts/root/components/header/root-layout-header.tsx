import { Button, Logo } from "@/components";

import { DownloadIcon } from "@/icons";

import * as Components from "./components";

import { clsx } from "clsx";

export type RootLayoutHeaderProps = {
  className?: string;
};

export const RootLayoutHeader: React.FC<RootLayoutHeaderProps> = (
  props,
): React.JSX.Element => {
  return (
    <header
      className={clsx(
        props.className,
        "relative container flex items-center justify-between py-[18px]",
      )}
    >
      {/* Logo */}
      <Logo />

      {/* Menu */}
      <Components.Menu className="absolute left-1/2 -translate-x-1/2" />

      {/* Action */}
      <Button
        title="Download App"
        animation="scale"
        IconComponent={<DownloadIcon />}
      />
    </header>
  );
};
