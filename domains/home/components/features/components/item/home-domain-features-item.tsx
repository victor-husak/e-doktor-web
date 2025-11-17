import * as Icons from "./icons";

import { clsx } from "clsx";

export type HomeDomainFeaturesItemProps = {
  className?: string;
  title: string;
  description: string;
};

export const HomeDomainFeaturesItem: React.FC<HomeDomainFeaturesItemProps> = (
  props,
): React.JSX.Element => {
  return (
    <div
      className={clsx(
        props.className,
        "flex gap-5 border-t border-[#F4F5F7] py-[25px]",
      )}
    >
      {/* Icon */}
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#F2F3F5]">
        <Icons.Book />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col">
        {/* Title */}
        <h3 className="mb-[15px] text-[15px]/[18px] font-semibold tracking-[-.008em] text-[#7C78ED]">
          {props.title}
        </h3>

        {/* Description */}
        <p className="text-[14px]/[20px] text-[#838993]">{props.description}</p>
      </div>
    </div>
  );
};
