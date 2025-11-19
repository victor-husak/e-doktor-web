import { Section, SectionHeader, Button } from "@/components";

import { VideoIcon, DownloadIcon } from "@/icons";

import { clsx } from "clsx";

export type HomeDomainVaccinationsProps = {
  className?: string;
};

export const HomeDomainVaccinations: React.FC<HomeDomainVaccinationsProps> = (
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
    ></Section>
  );
};
