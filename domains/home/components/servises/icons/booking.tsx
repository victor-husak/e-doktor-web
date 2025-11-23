import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    viewBox="0 0 10 10"
    {...props}
  >
    <path
      fill="#fff"
      d="M0 3.056v5.139A1.806 1.806 0 0 0 1.806 10h6.389A1.806 1.806 0 0 0 10 8.194V3.056Zm7.639 3.611a.694.694 0 1 1-.694.694.694.694 0 0 1 .694-.694ZM5 6.667a.694.694 0 1 1-.694.694A.694.694 0 0 1 5 6.667Zm2.639-2.5a.694.694 0 1 1-.694.694.694.694 0 0 1 .694-.694ZM5 4.167a.694.694 0 1 1-.694.694A.694.694 0 0 1 5 4.167Zm-2.639 0a.694.694 0 1 1-.694.694.694.694 0 0 1 .694-.694ZM1.806 0A1.806 1.806 0 0 0 0 1.806v.417h10v-.417A1.806 1.806 0 0 0 8.194 0Z"
    />
  </svg>
);
export default SvgComponent;
