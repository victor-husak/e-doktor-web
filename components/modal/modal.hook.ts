import { useDidMountEffect } from "@/hooks";

import type { ModalProps } from "./modal";

export const useModal = (props: ModalProps) => {
  useDidMountEffect(() => {
    if (props.isOpen) {
      document.body.classList.add("remove-scrolling");
    } else {
      document.body.classList.remove("remove-scrolling");
    }
  }, [props.isOpen]);
};
