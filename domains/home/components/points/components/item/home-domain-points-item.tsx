import NextImage from "next/image";

import { clsx } from "clsx";

export type HomeDomainPointsItemProps = {
  className?: string;
  title: string;
  description: string;
  src: string;
};

export const HomeDomainPointsItem: React.FC<HomeDomainPointsItemProps> = (
  props,
): React.JSX.Element => {
  return (
    <div
      className={clsx(
        props.className,
        "border-border flex flex-col rounded-lg border p-5",
      )}
    >
      {/* Icon */}
      <div className="mb-[22px] flex h-10 w-10 items-center justify-center rounded-full border border-[#F2F2F4]">
        {/* Image */}
        <NextImage
          className="h-6 w-6"
          src={props.src}
          width={72}
          height={72}
          alt={props.title}
        />
      </div>

      {/* Title */}
      <span className="link-dashed mb-[15px] text-[15px]/[18px] font-semibold tracking-[-.018em] text-[#716DE3] [--link-dashed-border-color:#716DE3]">
        {props.title}
      </span>

      {/* Description */}
      <p className="text-[14px]/[19px] text-[#838993]">{props.description}</p>
    </div>
  );
};
