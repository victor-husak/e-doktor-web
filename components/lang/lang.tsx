"use client";

import * as Icons from "./icons";

import { clsx } from "clsx";

import { useLangSelect } from "./lang.hook";

export type LangProps = {
  className?: string;
};

export const Lang: React.FC<LangProps> = (props): React.JSX.Element => {
  const { label, onChangeLocale } = useLangSelect();

  return (
    <button
      className={clsx(
        props.className,
        "flex cursor-pointer items-center gap-1.5 rounded-full px-2.5 py-1.5 transition-colors",
        "hover:bg-[#383838]",
      )}
      onClick={onChangeLocale}
    >
      <Icons.Lang />

      <span className="text-[12px]/[14px] text-white">{label}</span>
    </button>
  );
};
