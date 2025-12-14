"use client";

import type { ReactNode } from "react";

import { CSSTransition } from "react-transition-group";

import * as Components from "./components";

import classes from "./overfay-layout.module.scss";

import { clsx } from "clsx";

import { useOverfayLayout } from "./overfay-layout.hook";

export interface OverfayLayoutProps {
  className?: string;
  classNames?: {
    content?: string;
    children?: string;
  };
  withExitDelay?: boolean;
  hiddenFooter?: boolean;
  children: ReactNode;
  open: boolean;
  ContentComponent?: ReactNode;
  onClose: () => void;
  onExiting?: () => void;
}

export const OverfayLayout: React.FC<OverfayLayoutProps> = (
  props
): React.JSX.Element => {
  const { nodeRef, paddingTop } = useOverfayLayout(props);

  return (
    <CSSTransition
      in={props.open}
      nodeRef={nodeRef}
      timeout={700}
      classNames={{
        enterActive: classes["overlay-enter-active"],
        enterDone: classes["overlay-enter-active"],
        exitActive: classes["overlay-exit-active"],
        exitDone: classes["overlay-exit-active"],
      }}
      unmountOnExit
      onExited={props.onClose}
      onExiting={props.onExiting}
    >
      <div
        className={clsx(props.className, classes.container)}
        data-with-exit-delay={!!props.withExitDelay}
        data-show={!!props.open}
        ref={nodeRef}
      >
        <div className={classes.background} onClick={props.onClose} />

        <div className={classes.main} style={{ paddingTop }}>
          <div className={clsx(classes.content, props.classNames?.content)}>
            <div className={clsx(classes.children, props.classNames?.children)}>
              {props.children}
            </div>
          </div>

          {!props.hiddenFooter && (
            <Components.Footer
              className={classes.footer}
              onClose={props.onClose}
            />
          )}
        </div>

        {props.ContentComponent}
      </div>
    </CSSTransition>
  );
};
