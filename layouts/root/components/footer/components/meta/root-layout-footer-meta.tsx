import { clsx } from "clsx";

export type RootLayoutFooterMetaProps = {
  className?: string;
};

export const RootLayoutFooterMeta: React.FC<RootLayoutFooterMetaProps> = (
  props,
): React.JSX.Element => {
  return (
    <div className={clsx(props.className, "py-[25px]")}>
      <p className="max-w-[380px] text-[12px]/[16px] text-[#696B6F]">
        Backed by StartUp Albania for implementing innovation in healthcare.
        Read more on startupalbania.gov.al
      </p>
    </div>
  );
};
