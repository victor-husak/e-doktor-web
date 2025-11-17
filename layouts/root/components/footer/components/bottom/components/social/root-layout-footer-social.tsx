import { clsx } from "clsx";

export type RootLayoutFooterSocialProps = {
  className?: string;
  IconComponent: React.ReactNode;
};

export const RootLayoutFooterSocial: React.FC<RootLayoutFooterSocialProps> = (
  props,
): React.JSX.Element => {
  return (
    <button
      className={clsx(
        props.className,
        "flex h-[26px] w-[26px] cursor-pointer items-center justify-center rounded-full border border-[#242424] transition-colors",
        "[&_ellipse]:transition-colors [&_path]:transition-colors",
        "hover:[&_path]:fill-footer-background hover:border-white hover:bg-white hover:[&_ellipse]:fill-[#010E3D]",
      )}
    >
      {props.IconComponent}
    </button>
  );
};
