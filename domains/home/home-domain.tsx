import * as Components from "./components";

import { clsx } from "clsx";

export type HomeDomainProps = {
  className?: string;
};

export const HomeDomain: React.FC<HomeDomainProps> = (
  props,
): React.JSX.Element => {
  return (
    <div className={clsx(props.className, "")}>
      <Components.Header />

      <Components.Points className="border-border border-b" />

      <Components.Healthcare className="border-border border-b pb-[90px]" />

      <Components.Suite />

      <Components.Servises />

      <Components.Features className="mb-[50px]" />
    </div>
  );
};
