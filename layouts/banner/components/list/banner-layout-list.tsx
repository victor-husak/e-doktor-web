import * as Icons from "./icons";

import { clsx } from "clsx";

export type BannerLayoutListProps = {
  className?: string;
  items: string[];
};

export const BannerLayoutList: React.FC<BannerLayoutListProps> = (
  props,
): React.JSX.Element => {
  return (
    <ul className={clsx(props.className, "mb-auto flex flex-col gap-3")}>
      {props.items.map((item, index) => (
        <li className="relative flex items-center gap-[15px]" key={index}>
          <Icons.Star />

          {index < props.items.length - 1 && (
            <Icons.Texture
              className="absolute -bottom-px left-[3px] -translate-x-1/2 translate-y-full"
              color="current-color"
            />
          )}

          <span className="link-dashed text-[14px]/[16px] tracking-[-.008em] [--link-dashed-border-color:currentColor]">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
};
