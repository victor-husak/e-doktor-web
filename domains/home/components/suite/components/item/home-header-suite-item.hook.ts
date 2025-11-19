import { useState, useCallback } from "react";

export const useHomeHeaderSuiteItem = () => {
  const [active, setActive] = useState(false);

  const onTrigger = useCallback(() => {
    setActive(!active);
  }, [active]);

  return { active, onTrigger };
};
