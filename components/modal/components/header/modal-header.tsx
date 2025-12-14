import { CloseIcon } from "@/icons";

import classes from "./modal-header.module.scss";

import { clsx } from "clsx";

export type ModalHeaderProps = {
  className?: string;
  title?: string;
  description?: string;
  withBorder?: boolean;
  IconComponent?: React.ReactNode;
  SearchComponent?: React.ReactNode;
  onClose?: React.MouseEventHandler;
};

export const ModalHeader: React.FC<ModalHeaderProps> = (
  props,
): React.JSX.Element => {
  return (
    <div
      className={clsx(props.className, classes.container)}
      data-with-border={props.withBorder}
      data-with-description={!!props.description}
    >
      <div className={classes.content}>
        <div className={classes["top-line"]}>
          {!!props.IconComponent && (
            <div className={classes.icon}>{props.IconComponent}</div>
          )}

          <h3 className={classes.title}>{props.title}</h3>

          <div className={classes.close} onClick={props.onClose}>
            <CloseIcon />
          </div>
        </div>

        {!!props.description && (
          <p className={classes.description}>{props.description}</p>
        )}
      </div>

      {!!props.SearchComponent && (
        <div className={classes.search}>{props.SearchComponent}</div>
      )}
    </div>
  );
};
