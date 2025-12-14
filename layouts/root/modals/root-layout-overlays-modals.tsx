"use client";

import { useContext } from "react";

import { PreviewModal } from "@/modals/preview";

import { ModalContext } from "@/contexts/modal";

export const RootLayoutModals: React.FC = (): React.JSX.Element => {
  const modalContext = useContext(ModalContext);

  return (
    <>
      <PreviewModal
        isOpen={modalContext?.modal === "preview"}
        onRequestClose={() => modalContext?.setModal(null)}
      />
    </>
  );
};
