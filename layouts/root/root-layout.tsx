import { Suspense } from "react";

import dynamic from "next/dynamic";

import * as Components from "./components";

const RootLayoutModals = dynamic(() =>
  import("./modals").then((mod) => mod.RootLayoutModals),
);

import { clsx } from "clsx";

export type RootLayoutProps = {
  className?: string;
  children: React.ReactNode;
};

export const RootLayout: React.FC<RootLayoutProps> = (
  props,
): React.JSX.Element => {
  return (
    <Components.Scroll className={clsx(props.className, "relative")}>
      <Components.Topline />

      <Components.Header className="sticky top-0 z-2" />

      <Components.Info className="sticky top-[68px] z-2" />

      {props.children}

      <Components.Footer />

      <Suspense>
        <RootLayoutModals />
      </Suspense>
    </Components.Scroll>
  );
};
