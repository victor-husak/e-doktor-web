import { useState } from "react";

export const useHomeHeaderSuite = () => {
  const [activeId, setActiveId] = useState(1);

  return { activeId, onChangeActiveId: setActiveId };
};
