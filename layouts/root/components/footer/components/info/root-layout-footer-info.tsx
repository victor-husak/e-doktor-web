import { clsx } from "clsx";

export type RootLayoutFooterInfoProps = {
  className?: string;
};

export const RootLayoutFooterInfo: React.FC<RootLayoutFooterInfoProps> = (
  props,
): React.JSX.Element => {
  return (
    <div className={clsx(props.className, "")}>
      <p className="mb-[15px] text-[16px]/[21px] font-medium text-white">
        Smart access to public healthcare.
      </p>

      <p className="w-[390px] text-[14px]/[20px] tracking-[-.008em] text-[#8C8F91]">
        A fully digital healthcare platform connecting patients in Albania with
        clinics, doctors, pharmacies, and national health services — all in one
        secure app.
      </p>
    </div>
  );
};
