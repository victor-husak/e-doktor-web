"use client";

import NextImage from "next/image";

import {
  ButtonDownload,
  ButtonWatch,
  Section,
  SectionHeader,
} from "@/components";

import { DownloadIcon, VideoIcon } from "@/icons";

import * as Components from "./components";
import * as Icons from "./icons";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useTranslations } from "next-intl";

import { useHealthcare } from "./useHealthcare";

import { clsx } from "clsx";

import "swiper/css";

export type HealthcareProps = {
  className?: string;
};

export const Healthcare: React.FC<HealthcareProps> = (
  props,
): React.JSX.Element => {
  const t = useTranslations("pages.home.healthcare");
  const tCommonActions = useTranslations("common.actions");

  const { prevRef, nextRef, onBeforeInit } = useHealthcare();

  return (
    <Section
      className={clsx(props.className)}
      HeaderComponent={
        <SectionHeader
          className="pt-15 pb-20"
          classNameDescription="max-w-[700px]"
          title={
            <>
              {t("title.0")}
              <br />
              <span>{t("title.1")}</span>
            </>
          }
          description={t("description")}
          TopComponent={
            <Icons.Star className="mb-5 animate-(--animate-spin-custom)" />
          }
          ActionComponent={
            <>
              <ButtonWatch
                animation="scale"
                title={tCommonActions("watch-demo")}
                IconComponent={<VideoIcon />}
              />

              <ButtonDownload
                variant="second"
                animation="background"
                title={tCommonActions("download-app")}
                IconComponent={<DownloadIcon color="#1D1D1F" />}
              />
            </>
          }
        />
      }
    >
      {/* Container */}
      <div className="relative rounded-xl bg-[#E0D9FF]">
        <Swiper
          loop
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={onBeforeInit}
          modules={[Navigation]}
        >
          {data.map((item, index) => (
            <SwiperSlide key={item.id}>
              <div
                className={clsx(
                  "group p-2xl flex flex-col justify-between gap-10 pb-25",
                  "lg:pt-2xl lg:flex-row lg:gap-0 lg:pb-10 lg:pl-[50px]",
                )}
              >
                {/* Content */}
                <div className="flex flex-col items-start pt-2.5">
                  {/* Tag */}
                  <div className="mb-xl py-xxs flex items-center gap-2 rounded-full bg-[#7C78ED] px-2.5 text-[12px]/[14px] font-medium tracking-[-.016em] text-white">
                    <Icons.Booking />

                    <span>{t(`items.${index}.tag`)}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-sf-compact-display mb-xl text-[32px]/[38px] font-semibold tracking-[-.016em]">
                    <span className="text-[#7C78ED]">
                      {t(`items.${index}.title.0`)}
                    </span>
                    <br />
                    {t(`items.${index}.title.1`)}
                  </h3>

                  {/* Description */}
                  <p className="mb-2xl max-w-[580px] text-[14px]/[19px] tracking-[-.008em] text-[#3A364D]">
                    {t(`items.${index}.description`)}
                  </p>

                  {/* List */}
                  <Components.List
                    items={[
                      t(`items.${index}.items.0`),
                      t(`items.${index}.items.1`),
                      t(`items.${index}.items.2`),
                    ]}
                  />
                </div>

                {/* Preview */}
                <div
                  className={clsx(
                    "flex h-[300px] justify-center overflow-hidden rounded-lg bg-[#D4CDF4]",
                    "lg:h-[390px]",
                  )}
                >
                  <NextImage
                    className="h-full w-auto object-contain object-bottom"
                    src={item.preview}
                    width={2940}
                    height={2340}
                    alt="preview"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Actions */}
          <div
            className={clsx(
              "left-2xl absolute bottom-10 z-1 mt-auto flex gap-1.5",
              "lg:left-[50px]",
            )}
          >
            <Components.Arrow className="rotate-180" ref={prevRef} />

            <Components.Arrow ref={nextRef} />
          </div>
        </Swiper>

        {/* Background */}
        <NextImage
          className="absolute right-2 -bottom-2.5 left-2 -z-1 h-full w-[calc(100%-16px)] rounded-2xl"
          src="/images/home/healthcare-bg.webp"
          width={2528}
          height={940}
          alt="preview"
        />
      </div>
    </Section>
  );
};

const data = [
  { id: 1, preview: "/images/home/healthcare/slide_1.webp" },
  { id: 2, preview: "/images/home/healthcare/slide_2.webp" },
];
