import * as Icons from "./icons";

import { clsx } from "clsx";

export type FeaturesItemProps = {
  className?: string;
  title: string;
  description: string;
};

export const FeaturesItem: React.FC<FeaturesItemProps> = (
  props,
): React.JSX.Element => {
  return (
    <div
      className={clsx(
        props.className,
        "py-xl flex gap-5 border-t border-[#F4F5F7]",
      )}
    >
      {/* Icon */}
      <div className="border-border flex h-10 w-10 shrink-0 items-center justify-center rounded-full border">
        <Icons.Book />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col">
        {/* Title */}
        <h3 className="mb-md text-[15px]/[18px] font-semibold tracking-[-.008em] text-[#7C78ED]">
          {props.title}
        </h3>

        {/* Description */}
        <p className="text-[14px]/[20px] text-[#838993]">{props.description}</p>
      </div>
    </div>
  );
};
