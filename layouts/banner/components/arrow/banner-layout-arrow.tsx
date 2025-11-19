import * as Icons from "./icons";

import { clsx } from "clsx";

export type BannerLayoutArrowProps = {
  className?: string;
};

export const BannerLayoutArrow: React.FC<BannerLayoutArrowProps> = (
  props,
): React.JSX.Element => {
  return (
    <div
      className={clsx(
        props.className,
        "group flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-full bg-[#D4CDF4] transition-colors",
        "hover:bg-[#7C78ED]",
      )}
    >
      <Icons.Arrow
        className={clsx(
          "[&>path]:transition-colors",
          "group-hover:[&>path]:fill-white",
        )}
      />
    </div>
  );
};
