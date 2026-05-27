import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={12} height={14} {...props}>
    <path
      fill="#444"
      d="M1.818 0A1.785 1.785 0 0 0 0 1.75v10.5A1.785 1.785 0 0 0 1.818 14h9.636a.525.525 0 1 0 0-1.05H1.818a.714.714 0 0 1-.727-.7h10.364a.536.536 0 0 0 .545-.525V1.75A1.785 1.785 0 0 0 10.182 0Zm6.545 7.175v.35c0 .7-1.006 1.225-2.364 1.225s-2.364-.525-2.364-1.225v-.35a.536.536 0 0 1 .545-.525h3.636a.536.536 0 0 1 .545.525Zm-1.09-2.453A1.274 1.274 0 1 1 6 3.5a1.25 1.25 0 0 1 1.273 1.222Z"
    />
  </svg>
);
export default SvgComponent;
