import { StarIcon, TextureIcon } from "@/icons";

import { clsx } from "clsx";

export type ListProps = {
  className?: string;
  items: string[];
};

export const List: React.FC<ListProps> = (props): React.JSX.Element => {
  return (
    <ul className={clsx(props.className, "mb-auto flex flex-col gap-3")}>
      {props.items.map((item, index) => (
        <li
          className="gap-md relative my-[-2.5px] flex items-center"
          key={index}
        >
          <StarIcon />

          {index < props.items.length - 1 && (
            <TextureIcon
              className="absolute -bottom-px left-[3px] -translate-x-1/2 translate-y-full"
              color="current-color"
            />
          )}

          <span className="link-dashed text-[14px]/[21px] tracking-[-.008em]">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
};
