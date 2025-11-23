import * as Icons from "./icons";

import { clsx } from "clsx";

export type HomeHeaderUnifiedSuiteItemProps = {
  className?: string;
};

export const HomeHeaderUnifiedSuiteItem: React.FC<
  HomeHeaderUnifiedSuiteItemProps
> = (props): React.JSX.Element => {
  return (
    <div
      className={clsx(
        props.className,
        "flex cursor-pointer gap-[15px] rounded-md border border-[#EFF0F4] bg-white p-3.5 pr-5 transition-colors",
        "hover:bg-[#EFF0F4]",
      )}
    >
      {/* Icon */}
      <div className="border-border flex h-9 w-9 items-center justify-center rounded-full border">
        <Icons.Book />
      </div>
      {/* Content */}
      <div className="flex flex-col gap-1.5">
        {/* Title */}
        <span className="text-[14px]/[16px] font-medium tracking-[-.008]">
          Secure communication
        </span>

        {/* Description */}
        <p className="text-[14px]/[19px] text-[#838993]">
          Communicate with family members.
        </p>
      </div>
    </div>
  );
};
