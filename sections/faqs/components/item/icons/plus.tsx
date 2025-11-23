import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={8} height={8} {...props}>
    <g fill="#1b1b1b">
      <path d="M8 4.55H0v-1.1h8Z" data-name="Path 30282" />
      <path d="M3.45 8V0h1.1v8Z" data-name="Path 30283" />
    </g>
  </svg>
);
export default SvgComponent;
