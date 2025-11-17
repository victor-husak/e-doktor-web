import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={12} height={13.001} {...props}>
    <path
      fill="#7c78ed"
      d="M4.027 11.334h3.944a2 2 0 0 1-3.944 0ZM5.998-.003a5 5 0 0 1 5 5v2.67l.945 2.107a.633.633 0 0 1-.577.891H.633a.633.633 0 0 1-.578-.892l.943-2.106V4.825a5 5 0 0 1 5-4.828Z"
    />
  </svg>
);
export default SvgComponent;
