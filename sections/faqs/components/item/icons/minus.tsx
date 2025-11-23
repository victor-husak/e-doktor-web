import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={8} height={1.1} {...props}>
    <path fill="#1b1b1b" d="M8 1.1H0V0h8Z" data-name="Path 30282" />
  </svg>
);
export default SvgComponent;
