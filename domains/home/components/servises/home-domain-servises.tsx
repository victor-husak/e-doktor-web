import NextImage from "next/image";

import {
  BannerLayout,
  BannerLayoutList,
  BannerLayoutTag,
} from "@/layouts/banner";

import { Section, SectionHeader, Button } from "@/components";

import { VideoIcon, DownloadIcon } from "@/icons";

import * as Components from "./components";
import * as Icons from "./icons";

import { useTranslations } from "next-intl";

import { clsx } from "clsx";

export type HomeDomainServisesProps = {
  className?: string;
};

export const HomeDomainServises: React.FC<HomeDomainServisesProps> = (
  props,
): React.JSX.Element => {
  const t = useTranslations("pages.home.services");
  const tCommonActions = useTranslations("common.actions");

  return (
    <Section
      className={clsx(props.className, "")}
      HeaderComponent={
        <SectionHeader
          classNameDescription="max-w-[520px]"
          title={
            <>
              Vaccinations,
              <br />
              <span>finally made simple</span>
            </>
          }
          description="Track your doses, access verified digital certificates, receive reminders for upcoming shots, and instantly share your medical records with clinics or schools — all in one tap."
          ActionComponent={
            <>
              <Button
                animation="scale"
                title={tCommonActions("book-demo")}
                IconComponent={<VideoIcon />}
              />

              <Button
                variant="second"
                animation="background"
                title={tCommonActions("download-app")}
                IconComponent={<DownloadIcon color="#1D1D1F" />}
                href={process.env.NEXT_PUBLIC_DOWNLOAD_APP}
                target="_blank"
              />
            </>
          }
        />
      }
    >
      {/* Content */}
      <div
        className={clsx(
          "grid grid-cols-1 grid-rows-1 gap-5",
          "md:grid-cols-2",
          "xl:grid-cols-3 xl:grid-rows-[minmax(413px,auto)_auto]",
        )}
      >
        <BannerLayout
          className="md:col-span-2"
          title={
            <>
              <span className="text-[#7C78ED]">{t("booking.title.0")}</span>
              <br />
              {t("booking.title.1")}
            </>
          }
          description={
            <span className="flex max-w-[370px]">
              {t("booking.description")}
            </span>
          }
          TagComponent={
            <BannerLayoutTag
              title={t("booking.tag")}
              IconComponent={<Icons.Booking />}
            />
          }
          ListComponent={
            <BannerLayoutList
              className="text-[#7C78ED]! [--link-dashed-border-color:#BEB7F2]"
              items={[
                t("booking.items.0"),
                t("booking.items.1"),
                t("booking.items.2"),
              ]}
            />
          }
          ImageComponent={
            <div
              className={clsx(
                "hidden h-[390px] w-auto overflow-hidden rounded-lg bg-[#D4CDF4]",
                "md:flex",
              )}
            >
              <NextImage
                className="transition-img h-full w-auto group-hover:transform-[scale(1.03)]"
                src="/images/home/vaccinations/online-pharmacy.webp"
                width={2160}
                height={2340}
                alt="preview"
              />
            </div>
          }
          ActionComponent={
            <>
              <Button
                animation="scale"
                title={tCommonActions("book-demo")}
                IconComponent={<VideoIcon />}
              />

              <Button
                className="before:bg-[#D4CDF4]"
                variant="second"
                animation="scale"
                title={tCommonActions("download-app")}
                IconComponent={<DownloadIcon color="#1D1D1F" />}
                href={process.env.NEXT_PUBLIC_DOWNLOAD_APP}
                target="_blank"
              />
            </>
          }
        />

        <BannerLayout
          className="bg-[#F5F5F7]"
          size="small"
          title={
            <>
              <span className="text-[#AEB2C1]">
                {t("medical-history.title.0")}
              </span>
              <br />
              {t("medical-history.title.1")}
            </>
          }
          description={t("medical-history.description")}
          TagComponent={
            <BannerLayoutTag
              className="bg-[#E8E8EA] text-[#323233]!"
              title={t("medical-history.tag")}
              IconComponent={<Icons.History />}
            />
          }
          ListComponent={
            <BannerLayoutList
              className="text-[#858A9B] [--link-dashed-border-color:#D2D4D8]"
              items={[
                t("medical-history.items.0"),
                t("medical-history.items.1"),
                t("medical-history.items.2"),
              ]}
            />
          }
          ActionComponent={
            <Button
              className="before:bg-[#EAEAED]"
              variant="second"
              animation="scale"
              title={tCommonActions("book-demo")}
              IconComponent={<VideoIcon color="currentColor" />}
            />
          }
        />

        <BannerLayout
          className="bg-[#7C78ED]! text-white"
          size="small"
          title={
            <>
              <span className="text-[#BBB9F5]">
                {t("vaccinations.title.0")}
              </span>
              <br />
              {t("vaccinations.title.1")}
            </>
          }
          description={t("vaccinations.description")}
          TagComponent={
            <BannerLayoutTag
              className="bg-white text-[#7C78ED]!"
              title={t("vaccinations.tag")}
              IconComponent={<Icons.Vaccinations />}
            />
          }
          PreviewComponent={
            <NextImage
              className="transition-img bg-[#8884F2]"
              src="/images/home/vaccinations/2.webp"
              width={1002}
              height={600}
              alt="preview"
            />
          }
          ListComponent={
            <BannerLayoutList
              className="transition-img text-[#D4D3FF] [--link-dashed-border-color:#A29FF5]"
              items={[
                t("vaccinations.items.0"),
                t("vaccinations.items.1"),
                t("vaccinations.items.2"),
              ]}
            />
          }
          ActionComponent={
            <Button
              className="before:bg-white"
              variant="second"
              animation="scale"
              title={tCommonActions("watch-presentation")}
              IconComponent={<VideoIcon color="currentColor" />}
            />
          }
        />

        <BannerLayout
          className="bg-[#F5F5F7]"
          size="small"
          title={
            <>
              <span className="text-[#AEB2C1]">
                {t("prescriptions.title.0")}
              </span>
              <br />
              {t("prescriptions.title.1")}
            </>
          }
          description={t("prescriptions.description")}
          TagComponent={
            <BannerLayoutTag
              className="bg-[#E8E8EA] text-[#323233]!"
              title={t("prescriptions.tag")}
              IconComponent={<Icons.Doctor />}
            />
          }
          PreviewComponent={
            <NextImage
              className="transition-img bg-[#EDEDEF]"
              src="/images/home/vaccinations/presentation.webp"
              width={1002}
              height={600}
              alt="preview"
            />
          }
          ListComponent={
            <BannerLayoutList
              className="text-[#858A9B] [--link-dashed-border-color:#D2D4D8]"
              items={[
                t("prescriptions.items.0"),
                t("prescriptions.items.1"),
                t("prescriptions.items.2"),
              ]}
            />
          }
          ActionComponent={
            <Button
              className="before:bg-[#EAEAED]"
              variant="second"
              animation="scale"
              title={tCommonActions("watch-presentation")}
              IconComponent={<VideoIcon color="currentColor" />}
            />
          }
        />

        <BannerLayout
          className="bg-[#F8E9EC]"
          size="small"
          title={
            <>
              <span className="text-[#C9ABB3]">
                {t("emergency-call.title.0")}
              </span>
              <br />
              {t("emergency-call.title.1")}
            </>
          }
          description={t("emergency-call.description")}
          TagComponent={
            <BannerLayoutTag
              className="bg-[#EBD9DE] text-[#323233]!"
              title={t("emergency-call.tag")}
              IconComponent={<Icons.Call />}
            />
          }
          PreviewComponent={
            <NextImage
              className="transition-img bg-[#EBD9DE]"
              src="/images/home/vaccinations/call.webp"
              width={1002}
              height={600}
              alt="preview"
            />
          }
          ListComponent={
            <BannerLayoutList
              className="text-[#7E7375] [--link-dashed-border-color:#CCC3C5]"
              items={[
                t("emergency-call.items.0"),
                t("emergency-call.items.1"),
                t("emergency-call.items.2"),
              ]}
            />
          }
          ActionComponent={
            <Button
              className="before:bg-[#EBD8DD]"
              variant="second"
              animation="scale"
              title={tCommonActions("watch-presentation")}
              IconComponent={<VideoIcon color="currentColor" />}
            />
          }
        />
      </div>

      {/* Footer */}
      <Components.Footer />
    </Section>
  );
};
