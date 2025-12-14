"use client";

import { Button, type ButtonProps } from "@/components/button";

import { useButtonDownload } from "./button-download.hook";

export type ButtonDownloadProps = ButtonProps;

export const ButtonDownload: React.FC<ButtonDownloadProps> = (
  props,
): React.JSX.Element => {
  const { onClick } = useButtonDownload();

  return <Button {...props} onClick={onClick} />;
};
