import { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={10}
    viewBox="0 0 10 10"
    {...props}
  >
    <g transform="translate(-50 -3138)">
      <rect
        width={10}
        height={10}
        transform="translate(50 3138)"
        fill="rgba(255,255,255,0)"
      />
      <g transform="translate(52.2 3137.2)">
        <g transform="translate(0 0.8)">
          <g transform="translate(0 0)">
            <path
              d="M7.573,10.8V6.245H9.2l.243-1.782H7.573V3.326c0-.515.152-.865.935-.865H9.5V.87A14.334,14.334,0,0,0,8.046.8,2.207,2.207,0,0,0,5.622,3.15V4.459H4V6.245H5.622V10.8Z"
              transform="translate(-4 -0.8)"
              fill="#9B9B9B"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);
export default SVGComponent;
