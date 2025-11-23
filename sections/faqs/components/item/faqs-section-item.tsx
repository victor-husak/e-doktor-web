"use client";

import * as Icons from "./icons";

import { clsx } from "clsx";

import { useCollapse } from "react-collapsed";

export type FaqsSectionItemProps = {
  className?: string;
  id: number;
  title: string;
  active: boolean;
  children: React.ReactNode;
  onOpen: (id: number) => void;
};

export const FaqsSectionItem: React.FC<FaqsSectionItemProps> = (
  props,
): React.JSX.Element => {
  const { getCollapseProps, isExpanded } = useCollapse({
    duration: 400,
    isExpanded: props.active,
  });

  return (
    <div className={clsx(props.className, "border-b border-[#F4F5F7]")}>
      {/* Header */}
      <div
        className="group flex h-[58px] cursor-pointer items-center justify-between"
        onClick={() => props.onOpen(props.id)}
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
      <div {...getCollapseProps()}>{props.children}</div>
    </div>
  );
};
