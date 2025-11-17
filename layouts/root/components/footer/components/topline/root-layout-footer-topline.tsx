import { Logo, Lang } from "@/components";

import { clsx } from "clsx";

export type RootLayoutFooterToplineProps = {
  className?: string;
};

export const RootLayoutFooterTopline: React.FC<RootLayoutFooterToplineProps> = (
  props,
): React.JSX.Element => {
  return (
    <div
      className={clsx(
        props.className,
        "border-footer-border flex justify-between border-b",
      )}
    >
      {/* logo */}
      <Logo variant="invert" className="mt-[50px]" />

      {/* Lang */}
      <Lang className="mt-[46] mb-[43px]" />
    </div>
  );
};
