import * as Components from "./components";

import { clsx } from "clsx";

export type RootLayoutFooterMenuProps = {
  className?: string;
  title: string;
  items: { key: string; title: string; href?: string }[];
};

export const RootLayoutFooterMenu: React.FC<RootLayoutFooterMenuProps> = (
  props,
): React.JSX.Element => {
  return (
    <div className={clsx(props.className, "flex flex-col gap-7.5")}>
      {/* title */}
      <span className="text-[15px]/[18px] font-semibold tracking-[-.008em] text-white">
        {props.title}
      </span>

      {/* menu */}
      <ul className={clsx("my-[-6.5px] flex flex-col items-start")}>
        {props.items.map((item) => (
          <Components.Item title={item.title} href={item.href} key={item.key} />
        ))}
      </ul>
    </div>
  );
};
