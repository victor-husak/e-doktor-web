import * as Icons from "./icons";

import { clsx } from "clsx";

export type HomeDomainHealthcareListProps = {
  className?: string;
};

export const HomeDomainHealthcareList: React.FC<
  HomeDomainHealthcareListProps
> = (props): React.JSX.Element => {
  return (
    <ul className={clsx(props.className, "flex flex-col gap-3")}>
      {items.map((item, index) => (
        <li className="relative flex items-center gap-[15px]" key={index}>
          <Icons.Star />

          {index < items.length - 1 && (
            <Icons.Texture className="absolute -bottom-px left-[3px] -translate-x-1/2 translate-y-full" />
          )}

          <span className="text-[14px]/[16px] tracking-[-.008em] text-[#7C78ED]">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
};

const items = [
  "Smart scheduling with real-time doctor availability;",
  "Auto-created visit documents & QR confirmations;",
  "Automatic reminders and follow-ups;",
];
