import { useRef, useEffect, useState, useMemo } from "react";

import { usePathname } from "@/i18n/routing";

import { useDidMountEffect } from "@/hooks";

import { useMediaQuery } from "usehooks-ts";

import type { OverfayLayoutProps } from "./overfay-layout";

const useOverfayLayout = (props: OverfayLayoutProps) => {
  const isMobile = useMediaQuery("(max-width: 991.98px)");

  const nodeRef = useRef(null);

  const pathname = usePathname();

  const [offset, setOffset] = useState(0);

  const paddingTop = useMemo(() => {
    return (isMobile ? 79 : 69) + offset;
  }, [offset, isMobile]);

  useEffect(() => {
    props.onClose();
  }, [pathname]);

  // const ref = useOutsideClick(props.onClose);

  useDidMountEffect(() => {
    if (props.open) {
      if (window.scrollY < 38) {
        setOffset(38 - window.scrollY);
      } else if (offset) {
        setOffset(0);
      }

      document.body.classList.add("remove-scrolling");
    } else {
      document.body.classList.remove("remove-scrolling");
    }
  }, [props.open]);

  return { paddingTop, nodeRef };
};

export { useOverfayLayout };
