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
        reverse
        withFullDescription
        translation="pages.home.unified-suite"
        items={unifiedSuite}
      />

      <Components.UnifiedSuite
        translation="pages.home.complete-suite"
        items={completeSuite}
      />

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

const completeSuite = [
  {
    id: 1,
    title: "items.0.title",
    description: "items.0.description",
    items: [
      {
        id: 1,
        title: "items.0.items.0.title",
        description: "items.0.items.0.description",
        image: "/images/home/complete-suite/laboratory_tests.webp",
      },
      {
        id: 2,
        title: "items.0.items.1.title",
        description: "items.0.items.1.description",
        image:
          "/images/home/complete-suite/nationwide_access_to-diagnostics.webp",
      },
      {
        id: 3,
        title: "items.0.items.2.title",
        description: "items.0.items.2.description",
        image:
          "/images/home/complete-suite/nationwide_access_to-diagnostics.webp",
      },
      {
        id: 4,
        title: "items.0.items.3.title",
        description: "items.0.items.3.description",
        image:
          "/images/home/complete-suite/nationwide_access_to-diagnostics.webp",
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
        image: "/images/home/complete-suite/digital_delivery_of-results.webp",
      },
      {
        id: 2,
        title: "items.1.items.1.title",
        description: "items.1.items.1.description",
        image: "/images/home/complete-suite/digital_delivery_of-results.webp",
      },
      {
        id: 3,
        title: "items.1.items.2.title",
        description: "items.1.items.2.description",
        image: "/images/home/complete-suite/digital_delivery_of-results.webp",
      },
    ],
  },
];
