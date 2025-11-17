import { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={10}
    viewBox="0 0 10 10"
    {...props}
  >
    <g transform="translate(-82 -3138)">
      <rect
        width={10}
        height={10}
        transform="translate(82 3138)"
        fill="rgba(255,255,255,0)"
      />
      <g transform="translate(81.9 3138)">
        <g transform="translate(0.1 0)">
          <path
            d="M9.62,6.1c2.115,0,2.505,1.383,2.505,3.182v3.663H10.038V9.7c0-.774-.013-1.771-1.085-1.771-1.087,0-1.253.844-1.253,1.716v3.3H5.614V6.267h2V7.18h.029A2.2,2.2,0,0,1,9.62,6.1ZM4.3,6.267v6.679H2.214V6.267Z"
            transform="translate(-2.126 -2.946)"
            fill="#9B9B9B"
            fillRule="evenodd"
          />
          <ellipse cx={1.124} cy={1.115} rx={1.124} ry={1.115} fill="#9B9B9B" />
        </g>
      </g>
    </g>
  </svg>
);
export default SVGComponent;
