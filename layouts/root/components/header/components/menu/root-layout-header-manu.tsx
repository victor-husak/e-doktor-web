import * as Components from "./components";

import { clsx } from "clsx";

export type RootLayoutHeaderManuProps = {
  className?: string;
};

export const RootLayoutHeaderManu: React.FC<RootLayoutHeaderManuProps> = (
  props,
): React.JSX.Element => {
  return (
    <menu className={clsx(props.className, "flex items-center gap-[5px]")}>
      <Components.Item href="#what-we-offer" title="What we offer" />

      <Components.Item href="#who-we-help" title="Who we help" />

      <Components.Item href="#features" title="Features" />

      <Components.Item href="#contact-us" title="Contact us" />
    </menu>
  );
};
