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

      <Components.UnifiedSuite
        translation="pages.home.unified-suite"
        items={unifiedSuite}
      />

      <Components.Suite />

      <Components.Servises />

      <Components.Features className="mb-[50px]" />
    </div>
  );
};

const unifiedSuite = [
  {
    id: 1,
    title: "items.0.title",
    description: "items.0.description",
    items: [
      {
        id: 1,
        title: "items.0.items.0.title",
        description: "items.0.items.0.description",
        image: "/images/home/unified-suite/secure-communication.webp",
      },
      {
        id: 2,
        title: "items.0.items.1.title",
        description: "items.0.items.1.description",
        image: "/images/home/unified-suite/1-to-1-phone calls.webp",
      },
      {
        id: 3,
        title: "items.0.items.2.title",
        description: "items.0.items.2.description",
        image: "/images/home/unified-suite/secure-communication.webp",
      },
    ],
  },
  {
    id: 2,
    title: "items.1.title",
    description: "items.1.description",
    items: [
      {
        id: 1,
        title: "items.1.items.0.title",
        description: "items.1.items.0.description",
        image: "/images/home/unified-suite/slide_1_1.webp",
      },
      {
        id: 2,
        title: "items.1.items.1.title",
        description: "items.1.items.1.description",
        image: "/images/home/unified-suite/slide_2_2.webp",
      },
      {
        id: 3,
        title: "items.1.items.2.title",
        description: "items.1.items.2.description",
        image: "/images/home/unified-suite/slide_2_2.webp",
      },
    ],
  },
  {
    id: 3,
    title: "items.2.title",
    description: "items.2.description",
    image: "/images/home/unified-suite/integrated_documentation.webp",
    items: [],
  },
];
