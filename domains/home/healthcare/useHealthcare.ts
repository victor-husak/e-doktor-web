import { useCallback, useRef } from "react";

export const useHealthcare = () => {
  const prevRef = useRef<HTMLDivElement>(undefined);
  const nextRef = useRef<HTMLDivElement>(undefined);

  const onBeforeInit = useCallback((Swiper: any): void => {
    if (typeof Swiper.params.navigation !== "boolean") {
      const navigation = Swiper.params.navigation;
      navigation.prevEl = prevRef.current;
      navigation.nextEl = nextRef.current;
    }
  }, []);

  return { prevRef, nextRef, onBeforeInit };
};
