import { Modal, type ModalProps } from "@/components";

import ReactPlayer from "react-player";

export type PreviewModalProps = {
  isOpen: ModalProps["isOpen"];
  onRequestClose: ModalProps["onRequestClose"];
};

export const PreviewModal: React.FC<PreviewModalProps> = (
  props,
): React.JSX.Element => {
  return (
    <Modal
      isOpen={props.isOpen}
      title="Watch a demo"
      headerBorder
      onRequestClose={props.onRequestClose}
    >
      <ReactPlayer
        className="-mb-px rounded-b-[10px]"
        src="/IMG_9748.MP4"
        autoPlay
        muted
        playsInline
        controls
        loop
        width="90vw"
        height="80vh"
      />
    </Modal>
  );
};
