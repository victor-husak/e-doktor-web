"use client";

import { clsx } from "clsx";

import { useButton } from "./button.hook";

import type { LinkProps } from "next/link";

export type ButtonProps = {
  className?: string;
  title?: string;
  disabled?: boolean;
  href?: LinkProps["href"];
  target?: string;
  size?: "base" | "small";
  variant?: "base" | "second";
  animation?: "base" | "none" | "scale" | "darken";
  children?: React.ReactNode;
  IconComponent?: React.ReactNode;
  RightIconComponent?: React.ReactNode;
} & React.ComponentProps<"button">;

export const Button: React.FC<ButtonProps> = ({
  className,
  title,
  size = "base",
  variant = "base",
  animation = "base",
  disabled,
  href,
  target,
  children,
  IconComponent,
  RightIconComponent,
  ...props
}): React.JSX.Element => {
  const { onClick } = useButton({
    disabled,
    href,
    target,
    onClick: props.onClick,
  });

  return (
    <button
      {...props}
      className={clsx("button hoverable", className)}
      data-size={size}
      data-variant={variant}
      data-animation={animation}
      onClick={onClick}
    >
      {IconComponent}

      {title || children}

      {RightIconComponent}
    </button>
  );
};
