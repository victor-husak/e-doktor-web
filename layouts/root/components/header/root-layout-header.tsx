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
        "relative container flex items-center justify-between bg-white py-[18px]",
      )}
    >
      {/* Logo */}
      <Logo />

      {/* Menu */}
      <Components.Menu
        className={clsx("absolute left-1/2 hidden -translate-x-1/2", "lg:flex")}
      />

      {/* Action */}
      <Button
        title="Download App"
        size="small"
        animation="scale"
        IconComponent={<DownloadIcon />}
      />
    </header>
  );
};
