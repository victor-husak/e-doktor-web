"use client";

import * as Icons from "./icons";

import { clsx } from "clsx";

import { useCollapse } from "react-collapsed";

import { useHomeHeaderSuiteItem } from "./home-header-suite-item.hook";

export type HomeHeaderSuiteItemProps = {
  className?: string;
  title: string;
  description: string;
};

export const HomeHeaderSuiteItem: React.FC<HomeHeaderSuiteItemProps> = (
  props,
): React.JSX.Element => {
  const { active, onTrigger } = useHomeHeaderSuiteItem();

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
    duration: 400,
  });

  return (
    <div className={clsx(props.className, "border-b border-[#F4F5F7]")}>
      {/* Header */}
      <div
        className="group flex h-[58px] cursor-pointer items-center justify-between"
        {...getToggleProps({
          onClick: onTrigger,
        })}
      >
        <span
          className={clsx(
            "underline-hover flex text-[15px]/[18px] font-medium transition-all",
            "group-hover:decoration-current-color group-hover:underline group-hover:opacity-50",
          )}
        >
          {props.title}
        </span>

        {/* Action */}
        <button
          className={clsx(
            "flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-[#F4F4F4] transition-colors",
            "hover:bg-[#E2E2E2]",
          )}
        >
          {isExpanded ? <Icons.Minus /> : <Icons.Plus />}
        </button>
      </div>

      {/* Content */}
      <div {...getCollapseProps()}>
        <p className="mr-10 pb-5 text-[14px]/[19px] text-[#838993]">
          {props.description}
        </p>
      </div>
    </div>
  );
};
