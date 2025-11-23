"use client";

import NextImage from "next/image";

import { clsx } from "clsx";

export type FaqsSectionProps = {
  className?: React.ComponentProps<"section">["className"];
  id?: React.ComponentProps<"section">["id"];
  reverse?: boolean;
  tag: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  children: React.ReactNode;
};

export const FaqsSection: React.FC<FaqsSectionProps> = (
  props,
): React.JSX.Element => {
  return (
    <section
      id={props.id}
      className={clsx(
        props.className,
        "container flex flex-col-reverse justify-between gap-5 pt-[100px]",
        "xl:flex-row-reverse xl:gap-[50px]",
      )}
    >
      {/* Preview */}
      <NextImage
        className={clsx(
          "mx-auto max-h-[350px] flex-1 rounded-lg bg-[#F5F5F7] object-contain object-center",
          "lg:max-h-[400px] lg:max-w-full",
          "xl:max-h-none xl:max-w-[630px]",
        )}
        src="/images/home/suite.webp"
        width={1470}
        height={1170}
        alt="preview"
      />

      {/* Content */}
      <div className={clsx("mb-5 flex flex-1 flex-col", "xl:mb-0")}>
        {/* Info */}
        <div className="mb-10">
          {/* Header */}
          <div
            className={clsx(
              "relative mb-[25px] flex flex-col items-start pl-[30px]",
              "before:absolute before:top-0 before:bottom-0 before:-left-0.5 before:w-0.5 before:rounded-b-sm before:bg-[#7C78ED]",
            )}
          >
            {/* Tag */}
            <div
              className={clsx(
                "mb-2.5 flex items-center rounded-full bg-[#7C78ED] px-2 py-1",
              )}
            >
              <span className="text-[12px]/[14px] font-medium tracking-[-.008em] text-white">
                {props.tag}
              </span>
            </div>

            {/* Title */}
            <h2
              className={clsx(
                "font-sf-compact-display text-[38px]/[45px] font-semibold tracking-[-.024em]",
                "[&>span]:text-[#AEB2C1]",
              )}
            >
              {props.title}
            </h2>
          </div>

          {/* Description */}
          <p className="max-w-[560px] text-[15px]/[20px] text-[#828891]">
            {props.description}
          </p>
        </div>

        {/* Items */}
        <div className="mt-auto">{props.children}</div>
      </div>
    </section>
  );
};
