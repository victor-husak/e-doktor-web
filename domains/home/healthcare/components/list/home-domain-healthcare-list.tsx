import * as Icons from "./icons";

import { clsx } from "clsx";

export type HomeDomainHealthcareListProps = {
  className?: string;
  items: string[];
};

export const HomeDomainHealthcareList: React.FC<
  HomeDomainHealthcareListProps
> = (props): React.JSX.Element => {
  return (
    <ul className={clsx(props.className, "flex flex-col gap-3")}>
      {props.items.map((item, index) => (
        <li
          className="relative my-[-2.5px] flex items-center gap-[15px]"
          key={index}
        >
          <Icons.Star />

          {index < props.items.length - 1 && (
            <Icons.Texture className="absolute -bottom-px left-[3px] -translate-x-1/2 translate-y-full" />
          )}

          <span className="link-dashed text-[14px]/[21px] tracking-[-.008em] text-[#7C78ED] [--link-dashed-border-color:#BEB7F2]">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
};
