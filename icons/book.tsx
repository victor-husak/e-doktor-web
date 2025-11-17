import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={11} height={7} {...props}>
    <g fill="#fff">
      <path d="M1.31.01 6.291.003A1.286 1.286 0 0 1 7.602 1.26l.008 4.467a1.286 1.286 0 0 1-1.308 1.262l-4.98.009A1.286 1.286 0 0 1 .01 5.74L.002 1.273A1.286 1.286 0 0 1 1.31.011Z" />
      <path d="M8.482 2.05 9.975.79a.638.638 0 0 1 .663-.095.594.594 0 0 1 .364.541v4.531a.594.594 0 0 1-.364.542.638.638 0 0 1-.663-.1L8.482 4.948a.585.585 0 0 1-.21-.448V2.492a.585.585 0 0 1 .21-.442Z" />
    </g>
  </svg>
);
export default SvgComponent;
