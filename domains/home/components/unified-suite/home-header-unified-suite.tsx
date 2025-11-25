"use client";

import NextLink from "next/link";
import NextImage from "next/image";

import { FaqsSection, FaqsSectionItem } from "@/sections/faqs";

import { PlusIcon } from "@/icons";

import * as Components from "./components";

import { useTranslations } from "next-intl";

import { useHomeHeaderUnifiedSuite } from "./home-header-unified-suite.hook";

import { clsx } from "clsx";

export type Question = {
  id: number;
  title: string;
  description: string;
  items: QuestionItem[];
  image?: string;
};

export type QuestionItem = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export type HomeHeaderUnifiedSuiteProps = {
  className?: string;
  translation: string;
  withFullDescription?: boolean;
  reverse?: boolean;
  items: Question[];
};

export const HomeHeaderUnifiedSuite: React.FC<HomeHeaderUnifiedSuiteProps> = (
  props,
): React.JSX.Element => {
  const t = useTranslations(props.translation);

  const { image, activeId, activeItemId, onChangeActive, onChangeActiveItem } =
    useHomeHeaderUnifiedSuite(props);

  return (
    <FaqsSection
      reverse={props.reverse}
      className="scroll-mt-15"
      id="what-we-offer"
      tag={t("header.tag")}
      title={
        <>
          {t("header.title.0")}
          <br />
          <span>{t("header.title.1")}</span>
        </>
      }
      description={
        <>
          {t("header.description")}
          {props.withFullDescription && (
            <>
              {" "}
              <NextLink
                className={clsx(
                  "link-dashed inline-flex items-center gap-[5px] text-[#7C78ED] transition-opacity [--link-dashed-border-color:currentColor]",
                  "hover:opacity-60",
                )}
                href="/"
              >
                <span>{t("header.read-more")}</span>

                <PlusIcon color="#7C78ED" />
              </NextLink>
            </>
          )}
        </>
      }
      PreviewComponent={
        image && (
          <NextImage
            className={clsx(
              "mx-auto max-h-[350px] flex-1 rounded-lg bg-[#F5F5F7] object-contain object-center",
              "lg:max-h-[400px] lg:max-w-full",
              "xl:max-h-none xl:max-w-[630px]",
            )}
            src={image}
            width={3780}
            height={4140}
            alt="preview"
          />
        )
      }
    >
      <div className="xl:mt-[69px]">
        {props.items.map((question, index) => (
          <FaqsSectionItem
            className={clsx({ "border-t": index === 0 })}
            title={t(question.title)}
            id={question.id}
            active={question.id === activeId}
            key={question.id}
            onOpen={() => onChangeActive(question)}
          >
            {/* Container */}
            <div
              className={clsx(
                props.className,
                "flex flex-col gap-[25px] pb-[25px]",
              )}
            >
              {/* Title */}
              <p className="mr-10 text-[14px]/[20px] text-[#838993]">
                {t(question.description)}
              </p>

              {/* Grid */}
              {!!question.items.length && (
                <div
                  className={clsx("grid grid-cols-1 gap-2.5", "sm:grid-cols-2")}
                >
                  {question.items?.map((item) => (
                    <Components.Item
                      title={t(item.title)}
                      description={t(item.description)}
                      active={activeItemId === item.id}
                      key={item.id}
                      onSelect={() => onChangeActiveItem(item)}
                    />
                  ))}
                </div>
              )}
            </div>
          </FaqsSectionItem>
        ))}
      </div>
    </FaqsSection>
  );
};
