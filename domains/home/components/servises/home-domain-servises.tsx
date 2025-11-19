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

import { clsx } from "clsx";

export type HomeDomainServisesProps = {
  className?: string;
};

export const HomeDomainServises: React.FC<HomeDomainServisesProps> = (
  props,
): React.JSX.Element => {
  return (
    <Section
      className={clsx(props.className, "")}
      HeaderComponent={
        <SectionHeader
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
              <Button title="Book a demo" IconComponent={<VideoIcon />} />

              <Button
                variant="second"
                title="Download app"
                IconComponent={<DownloadIcon color="#1D1D1F" />}
              />
            </>
          }
        />
      }
    >
      {/* Content */}
      <div className="grid grid-cols-3 grid-rows-[minmax(413px,auto)_auto] gap-5">
        <BannerLayout
          className="col-span-2"
          title={
            <>
              <span className="text-[#7C78ED]">Stay in control</span>
              <br />
              of every doctor visit
            </>
          }
          description={
            <span className="flex max-w-[370px]">
              View upcoming and past visits, access full appointment details,
              check referral requirements, and receive instant confirmations —
              all in one intuitive interface.
            </span>
          }
          TagComponent={
            <BannerLayoutTag
              title="Booking"
              IconComponent={<Icons.Booking />}
            />
          }
          ListComponent={
            <BannerLayoutList
              className="text-[#757190]"
              items={[
                "Instant scheduling for in-person & video visits",
                "Full details: doctor, facility, referral, coverage",
                "Quick check-in with generated QR codes",
              ]}
            />
          }
          ImageComponent={
            <div className="h-[390px] overflow-hidden rounded-lg bg-[#D4CDF4]">
              <NextImage
                className="transition-img h-full w-auto group-hover:transform-[scale(1.03)]"
                src="/images/home/vaccinations/1.webp"
                width={1080}
                height={1170}
                alt="preview"
              />
            </div>
          }
          ActionComponent={
            <>
              <Button
                animation="scale"
                title="Book a demo"
                IconComponent={<VideoIcon />}
              />

              <Button
                className="before:bg-[#D4CDF4]"
                variant="second"
                animation="scale"
                title="Download app"
                IconComponent={<DownloadIcon color="#1D1D1F" />}
              />
            </>
          }
        />

        <BannerLayout
          className="bg-[#F5F5F7]"
          title={
            <>
              <span className="text-[#AEB2C1]">Medical history,</span>
              <br />
              always with you
            </>
          }
          description="eDoktor automatically syncs data from clinics, hospitals, pharmacies, and your doctors to give you a complete, reliable medical history."
          TagComponent={
            <BannerLayoutTag
              className="bg-[#E8E8EA] text-[#323233]!"
              title="Medical history"
              IconComponent={<Icons.History />}
            />
          }
          ListComponent={
            <BannerLayoutList
              className="text-[#858A9B]"
              items={[
                "Unified timeline of your care",
                "Smart filters and instant search",
                "Digital certificates and documents",
              ]}
            />
          }
          ActionComponent={
            <Button
              className="before:bg-[#EAEAED]"
              variant="second"
              animation="scale"
              title="Book a demo"
              IconComponent={<VideoIcon color="currentColor" />}
            />
          }
        />

        <BannerLayout
          className="bg-[#7C78ED]! text-white"
          title={
            <>
              <span className="text-[#BBB9F5]">Yuor digital</span>
              <br />
              vaccination hub
            </>
          }
          description="Track, schedule, and manage all vaccinations for you and your family — fully digital, connected to Albania’s national immunization system."
          TagComponent={
            <BannerLayoutTag
              className="bg-white text-[#7C78ED]!"
              title="Vaccinations"
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
              className="transition-img text-[#D4D3FF]"
              items={[
                "Automatically tracked vaccine schedule",
                "Easy booking for any vaccine type",
                "Instant digital certificates",
              ]}
            />
          }
          ActionComponent={
            <Button
              className="before:bg-white"
              variant="second"
              animation="scale"
              title="Book a demo"
              IconComponent={<VideoIcon color="currentColor" />}
            />
          }
        />

        <BannerLayout
          className="bg-[#F5F5F7]"
          title={
            <>
              <span className="text-[#AEB2C1]">Stay connected</span>
              <br />
              with your family doctor
            </>
          }
          description="Book in-person or video meeting , request referrals, access medical history and prescriptions, and communicate with your family doctor."
          TagComponent={
            <BannerLayoutTag
              className="bg-[#E8E8EA] text-[#323233]!"
              title="Family doctor"
              IconComponent={<Icons.Doctor />}
            />
          }
          PreviewComponent={
            <NextImage
              className="transition-img bg-[#EDEDEF]"
              src="/images/home/vaccinations/doctor.webp"
              width={1002}
              height={600}
              alt="preview"
            />
          }
          ListComponent={
            <BannerLayoutList
              className="text-[#858A9B]"
              items={[
                "Сommunication with calls, video, and chat",
                "Booking with real-time availability",
                "Instant referrals for specialist",
              ]}
            />
          }
          ActionComponent={
            <Button
              className="before:bg-[#EAEAED]"
              variant="second"
              animation="scale"
              title="Book a demo"
              IconComponent={<VideoIcon color="currentColor" />}
            />
          }
        />

        <BannerLayout
          className="bg-[#F8E9EC]"
          title={
            <>
              <span className="text-[#C9ABB3]">One-tap help</span>
              <br />
              when it matters most
            </>
          }
          description="In urgent situations, every second matters. We instantly connect you to a doctor who can assess your condition, and coordinate help."
          TagComponent={
            <BannerLayoutTag
              className="bg-[#EBD9DE] text-[#323233]!"
              title="Emergency call"
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
              className="text-[#7E7375]"
              items={[
                "Automatic location sharing",
                "Direct connection with certified doctors",
                "24/7 availability across the country",
              ]}
            />
          }
          ActionComponent={
            <Button
              className="before:bg-[#EBD8DD]"
              variant="second"
              animation="scale"
              title="Book a demo"
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
