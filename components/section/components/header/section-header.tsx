import { clsx } from "clsx";

export type SectionHeaderProps = {
  className?: string;
  classNameDescription?: string;
  title: React.ReactNode;
  description: string;
  ActionComponent?: React.ReactNode;
};

export const SectionHeader: React.FC<SectionHeaderProps> = (
  props,
): React.JSX.Element => {
  return (
    <header
      className={clsx(props.className, "flex flex-col items-center py-25")}
    >
      {/* Title */}
      <h2
        className={clsx(
          "font-sf-compact-display mb-[25px] text-center text-[38px]/[45px] font-semibold tracking-[-.024em]",
          "[&>span]:text-[#AEB2C1]",
        )}
      >
        {props.title}
      </h2>

      <p
        className={clsx(
          "text-center text-[15px]/[20px] text-[#828891]",
          props.classNameDescription,
        )}
      >
        {props.description}
      </p>

      {!!props.ActionComponent && (
        <div className="mt-[30px] flex justify-center gap-2.5">
          {props.ActionComponent}
        </div>
      )}
    </header>
  );
};
