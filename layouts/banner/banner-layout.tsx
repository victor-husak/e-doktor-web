import { clsx } from "clsx";

export type BannerLayoutProps = {
  className?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  TagComponent: React.ReactNode;
  ActionComponent?: React.ReactNode;
  ImageComponent?: React.ReactNode;
  PreviewComponent?: React.ReactNode;
  ListComponent?: React.ReactNode;
};

export const BannerLayout: React.FC<BannerLayoutProps> = (
  props,
): React.JSX.Element => {
  return (
    <div
      className={clsx(
        "group relative flex justify-between rounded-xl bg-[#E0D9FF] pt-[30px] pr-[30px] pb-10 pl-[50px] text-[#3A364D]",
        props.className,
      )}
    >
      {/* Content */}
      <div className="flex flex-col items-start pt-2.5">
        {/* Tag */}
        {props.TagComponent}

        {/* Title */}
        <h3 className="font-sf-compact-display mb-[25px] text-[32px]/[38px] font-semibold tracking-[-.016em]">
          {props.title}
        </h3>

        {/* Preview */}
        {!!props.PreviewComponent && (
          <div
            className={clsx(
              "mb-[25px] h-[200px] overflow-hidden rounded-lg",
              "[&>img]:transition-img [&>img]:h-full [&>img]:w-full [&>img]:object-cover [&>img]:group-hover:transform-[scale(1.03)]",
            )}
          >
            {props.PreviewComponent}
          </div>
        )}

        {/* Description */}
        <p className="mb-[30px] max-w-[580px] text-[14px]/[19px] tracking-[-.008em]">
          {props.description}
        </p>

        {/* List */}
        {props.ListComponent}

        {/* Actions */}
        {!!props.ActionComponent && (
          <div className="mt-[35px] flex gap-2.5">{props.ActionComponent}</div>
        )}
      </div>

      {/* Image */}
      {props.ImageComponent}
    </div>
  );
};
