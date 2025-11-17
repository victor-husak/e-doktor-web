import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} {...props}>
    <path
      fill="#7c78ed"
      d="M0 3.667v6.167A2.167 2.167 0 0 0 2.167 12h7.667A2.167 2.167 0 0 0 12 9.833V3.667ZM9.167 8a.833.833 0 1 1-.833.833A.833.833 0 0 1 9.167 8ZM6 8a.833.833 0 1 1-.833.833A.833.833 0 0 1 6 8Zm3.167-3a.833.833 0 1 1-.833.833A.833.833 0 0 1 9.167 5ZM6 5a.833.833 0 1 1-.833.833A.833.833 0 0 1 6 5ZM2.833 5A.833.833 0 1 1 2 5.833.833.833 0 0 1 2.833 5Zm-.666-5A2.167 2.167 0 0 0 0 2.167v.5h12v-.5A2.167 2.167 0 0 0 9.833 0Z"
    />
  </svg>
);
export default SvgComponent;
