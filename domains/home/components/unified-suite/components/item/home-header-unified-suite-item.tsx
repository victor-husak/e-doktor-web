import * as Icons from "./icons";

import { clsx } from "clsx";

export type HomeHeaderUnifiedSuiteItemProps = {
  className?: string;
  title: string;
  description: string;
  active: boolean;
  onSelect: () => void;
};

export const HomeHeaderUnifiedSuiteItem: React.FC<
  HomeHeaderUnifiedSuiteItemProps
> = (props): React.JSX.Element => {
  return (
    <div
      className={clsx(
        props.className,
        "flex cursor-pointer gap-[15px] rounded-md border border-[#EFF0F4] p-3.5 pr-5 transition-colors",
        "hover:bg-[#EFF0F4]",
        { "bg-white": !props.active },
        { "bg-[#EFF0F4]": props.active },
      )}
      onClick={props.onSelect}
    >
      {/* Icon */}
      <div className="border-border flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-white">
        <Icons.Book />
      </div>
      {/* Content */}
      <div className="flex flex-col gap-1.5">
        {/* Title */}
        <span className="text-[14px]/[16px] font-medium tracking-[-.008]">
          {props.title}
        </span>

        {/* Description */}
        <p className="text-[14px]/[19px] text-[#838993]">{props.description}</p>
      </div>
    </div>
  );
};
