"use client";

import ReactModal from "react-modal";

// import { Loader } from "@/components/loader";

import { Header } from "./components";

import { useModal } from "./modal.hook";

import classes from "./modal.module.scss";

import { clsx } from "clsx";

export type ModalProps = {
  className?: string;
  classNames?: {
    content?: string;
  };
  isOpen: boolean;
  headerBorder?: boolean;
  title?: string;
  description?: string;
  contentTitle?: string;
  IconComponent?: React.ReactNode;
  // loading?: boolean;
  children?: React.ReactNode;
  SearchComponent?: React.ReactNode;
  FooterComponent?: React.ReactNode;
  onAfterClose?(): void;
  onRequestClose?(): void;
};

export const Modal: React.FC<ModalProps> = (props): React.JSX.Element => {
  useModal(props);

  return (
    <ReactModal
      className={classes.modal}
      // className={classes.modal}
      // className={classes.modal}
      isOpen={props.isOpen}
      closeTimeoutMS={400}
      style={modalStyle}
      ariaHideApp={false}
      onAfterClose={props.onAfterClose}
      onRequestClose={props.onRequestClose}
    >
      <div className={clsx(props.className, classes.container)}>
        <Header
          withBorder={props.headerBorder}
          title={props.title}
          description={props.description}
          IconComponent={props.IconComponent}
          SearchComponent={props.SearchComponent}
          onClose={props.onRequestClose}
        />

        <div className={clsx(props.classNames?.content, classes.content)}>
          <div className={classes.children}>{props.children}</div>
        </div>

        {!!props.FooterComponent && (
          <div className={classes.footer}>{props.FooterComponent}</div>
        )}

        {/* {!!props.loading && <Loader />} */}
      </div>
    </ReactModal>
  );
};

const modalStyle: ReactModal.Styles = {
  overlay: {
    width: "100vw",
    maxWidth: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    outline: "none",
    padding: "20px",
    zIndex: 99,
  },
  content: {
    zIndex: 2,
    background: "transparent",
    position: "relative",
    inset: 0,
    border: "none",
    margin: 0,
    padding: 0,
    overflow: "hidden",
    maxHeight: "100%",
    maxWidth: "100%",
  },
};
