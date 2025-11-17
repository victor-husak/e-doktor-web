import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={9} height={10} {...props}>
    <path
      fill={props.color || "#fff"}
      d="M.455 9.105h8.1a.451.451 0 0 1 .061.9H.455a.451.451 0 0 1-.061-.9h.061Zm3.979-9.1h.074a.6.6 0 0 1 .6.53v5.622l1.976-1.975a.6.6 0 0 1 .792-.05l.056.05a.6.6 0 0 1 .05.792l-.05.056-3 3a.6.6 0 0 1-.792.05l-.056-.05-3-3a.6.6 0 0 1 .792-.9l.056.05 1.976 1.969V.6a.6.6 0 0 1 .53-.6l.07.005h-.07Z"
    />
  </svg>
);
export default SvgComponent;
