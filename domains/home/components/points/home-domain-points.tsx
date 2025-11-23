import * as Components from "./components";
import * as Icons from "./icons";

import { clsx } from "clsx";

export type HomeDomainPointsProps = {
  className?: string;
};

export const HomeDomainPoints: React.FC<HomeDomainPointsProps> = (
  props,
): React.JSX.Element => {
  return (
    <section
      className={clsx(
        props.className,
        "relative container grid grid-cols-1 gap-5 pt-5 pb-[87px]",
        "sm:grid-cols-2 lg:grid-cols-3",
      )}
    >
      <Components.Item
        title="Book appointments"
        description="Book and manage visits with your family doctor or specialist through the national healthcare system."
        IconComponent={<Icons.Book />}
      />

      <Components.Item
        title="e-Prescriptions"
        description="Request and renew your prescriptions online, linked directly to Albania’s national pharmacy network."
        IconComponent={<Icons.EPrescriptions />}
      />

      <Components.Item
        title="Personalised health services"
        description="Manage schedules and availability, and enable native appointment booking for customers"
        IconComponent={<Icons.Personalised />}
      />

      {/* Icon */}
      <Icons.Star className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 animate-(--animate-spin-custom)" />
    </section>
  );
};
