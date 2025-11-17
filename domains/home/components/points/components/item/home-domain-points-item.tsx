import { clsx } from "clsx";

export type HomeDomainPointsItemProps = {
  className?: string;
  title: string;
  description: string;
  IconComponent: React.ReactNode;
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
        {props.IconComponent}
      </div>

      {/* Title */}
      <span className="mb-[15px] text-[15px]/[18px] font-semibold tracking-[-.018em] text-[#2C2C2C]">
        {props.title}
      </span>

      {/* Description */}
      <p className="text-[14px]/[19px] text-[#838993]">{props.description}</p>
    </div>
  );
};
