import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={10}
    viewBox="0 0 10 10"
    {...props}
  >
    <g fill="#222">
      <path d="M9.074 10 .001.927.928 0l9.073 9.073Z" />
      <path d="M0 9.073 9.073 0 10 .927.927 10Z" />
    </g>
  </svg>
);
export default SvgComponent;
