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

      <Components.Features className="mb-[50px]" />
    </div>
  );
};
