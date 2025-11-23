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
        "bg-topline-background relative container flex min-h-[38px] items-center justify-between gap-2 py-1.5",
        "xl:justify-end",
      )}
    >
      {/* Description */}
      <p
        className={clsx(
          "text-topline-foreground text-[12px]/[16px]",
          "xl:absolute xl:left-1/2 xl:-translate-x-1/2",
        )}
      >
        Book appointments, manage prescriptions, and access your public health
        data —{" "}
        <span
          className={clsx(
            "link-dashed cursor-pointer transition-colors",
            "hover:text-white",
          )}
        >
          all in one app
        </span>
      </p>

      {/* Logo */}
      <Lang />
    </div>
  );
};
