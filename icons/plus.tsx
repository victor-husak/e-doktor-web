import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={6} height={6} {...props}>
    <g fill="none" stroke={props.color || "#fff"} strokeLinecap="square">
      <path d="M.495 3h5" />
      <path d="M3 .5v5" />
    </g>
  </svg>
);
export default SvgComponent;
