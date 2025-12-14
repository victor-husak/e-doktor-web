import { useCallback, useContext } from "react";

import { ModalContext } from "@/contexts/modal";

export const useButtonWatch = () => {
  const modalContext = useContext(ModalContext);

  const onClick = useCallback(() => {
    modalContext?.setModal("preview");
  }, []);

  return { onClick };
};
