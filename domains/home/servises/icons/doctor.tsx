import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    viewBox="0 0 8 10"
    {...props}
  >
    <path
      fill="#323233"
      d="M6.877 5.996a1.125 1.125 0 0 1 1.125 1.125v.459a1.375 1.375 0 0 1-.256.8 4.3 4.3 0 0 1-3.749 1.616A4.291 4.291 0 0 1 .253 8.377a1.375 1.375 0 0 1-.256-.793v-.46a1.125 1.125 0 0 1 1.128-1.128h5.752Zm-2.88-6a2.5 2.5 0 1 1-2.5 2.5 2.5 2.5 0 0 1 2.5-2.5Z"
    />
  </svg>
);
export default SvgComponent;
