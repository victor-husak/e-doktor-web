import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} {...props}>
    <path
      fill="#333"
      d="M5.407 5.926v6.071A8 8 0 0 1 .161 5.926h5.247Zm5.581 2.364a7.876 7.876 0 0 1-4.375 3.7V5.926h5.231a8.249 8.249 0 0 1-.856 2.364ZM5.408.032v4.652h-5.4a8.351 8.351 0 0 1 .31-2.665.6.6 0 0 1 .6-.446 6.453 6.453 0 0 0 4.321-1.4Zm1.2 4.652V.045L6.554 0a6.467 6.467 0 0 0 4.319 1.579l.205-.006a.6.6 0 0 1 .6.446 8.353 8.353 0 0 1 .31 2.665H6.609Z"
    />
  </svg>
);
export default SvgComponent;
