"use client";

import { Button, type ButtonProps } from "@/components/button";

import { useButtonWatch } from "./button-watch.hook";

export type ButtonWatchProps = ButtonProps;

export const ButtonWatch: React.FC<ButtonWatchProps> = (
  props,
): React.JSX.Element => {
  const { onClick } = useButtonWatch();

  return <Button {...props} onClick={onClick} />;
};
