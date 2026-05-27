import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={6}
    height={6}
    viewBox="0 0 6 6"
    {...props}
  >
    <path
      fill="currentColor"
      d="m4.725 2.345 1.075.373a.3.3 0 0 1 .185.381.3.3 0 0 1-.185.18l-1.071.373a1.724 1.724 0 0 0-1.074 1.073l-.373 1.074a.3.3 0 0 1-.378.186.291.291 0 0 1-.189-.191l-.371-1.069a1.727 1.727 0 0 0-1.068-1.068L.2 3.284a.3.3 0 0 1-.188-.378.3.3 0 0 1 .188-.189l1.072-.373a1.725 1.725 0 0 0 1.072-1.065L2.717.204a.3.3 0 0 1 .15-.17.3.3 0 0 1 .416.172l.372 1.073a1.725 1.725 0 0 0 1.07 1.066Z"
    />
  </svg>
);
export default SvgComponent;
