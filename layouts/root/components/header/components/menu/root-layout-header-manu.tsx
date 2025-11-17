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
      <Components.Item title="What we offer" />

      <Components.Item title="Who we help" />

      <Components.Item href="about-us" title="About us" />

      <Components.Item href="contact-us" title="Contact us" />
    </menu>
  );
};
