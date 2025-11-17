import { clsx } from "clsx";

export type SectionHeaderProps = {
  className?: string;
  title: React.ReactNode;
  description: string;
};

export const SectionHeader: React.FC<SectionHeaderProps> = (
  props,
): React.JSX.Element => {
  return (
    <header className={clsx(props.className, "py-25")}>
      {/* Title */}
      <h2 className="font-sf-compact-display mb-[25px] text-center text-[38px]/[45px] font-semibold tracking-[-.024em]">
        {props.title}
      </h2>

      <p
        className={
          "max-w-[460px] text-center text-[15px]/[20px] text-[#828891]"
        }
      >
        {props.description}
      </p>
    </header>
  );
};
