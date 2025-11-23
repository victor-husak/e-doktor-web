"use client";

import NextImage from "next/image";

import { clsx } from "clsx";

export type FaqsSectionProps = {
  className?: React.ComponentProps<"section">["className"];
  id?: React.ComponentProps<"section">["id"];
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
        "container flex justify-between gap-[50px] pt-[100px]",
      )}
    >
      {/* Preview */}
      <NextImage
        className="w-[630px] rounded-lg bg-[#F5F5F7] object-contain object-center"
        src="/images/home/suite.webp"
        width={1470}
        height={1170}
        alt="preview"
      />

      {/* Content */}
      <div className="flex flex-1 flex-col">
        {/* Info */}
        <div>
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
