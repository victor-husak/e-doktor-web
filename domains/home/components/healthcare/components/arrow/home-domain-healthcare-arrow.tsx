import * as Icons from "./icons";

import { clsx } from "clsx";

export type HomeDomainHealthcareArrowProps = {
  className?: string;
};

export const HomeDomainHealthcareArrow: React.FC<
  HomeDomainHealthcareArrowProps
> = (props): React.JSX.Element => {
  return (
    <div
      className={clsx(
        props.className,
        "flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-full bg-[#D4CDF4] transition-colors",
        "hover:bg-[#7C78ED] hover:[&>svg>path]:fill-white",
      )}
    >
      <Icons.Arrow
        className={clsx(
          "[&>path]:fill-[#5D5D90] [&>path]:transition-colors",
          // "group-hover:[&>path]:fill-white",
        )}
      />
    </div>
  );
};
