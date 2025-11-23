import { useState } from "react";

export const useHomeHeaderUnifiedSuite = () => {
  const [activeId, setActiveId] = useState(1);

  return { activeId, onChangeActiveId: setActiveId };
};
