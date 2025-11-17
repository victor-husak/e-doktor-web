import { Lang } from "@/components";

import { clsx } from "clsx";

export type RootLayoutToplineProps = {
  className?: string;
};

export const RootLayoutTopline: React.FC<RootLayoutToplineProps> = (
  props,
): React.JSX.Element => {
  return (
    <div
      className={clsx(
        props.className,
        "bg-topline-background relative container flex h-[38px] items-center justify-end",
      )}
    >
      {/* Description */}
      <p className="text-topline-foreground absolute left-1/2 -translate-x-1/2 text-[12px]/[14px]">
        Book appointments, manage prescriptions, and access your public health
        data — <span className="link-dashed text-white">all in one app</span>
      </p>

      {/* Logo */}
      <Lang />
    </div>
  );
};
