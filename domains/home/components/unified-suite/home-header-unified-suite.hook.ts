import { useState, useCallback } from "react";

import type {
  HomeHeaderUnifiedSuiteProps,
  Question,
  QuestionItem,
} from "./home-header-unified-suite";

export const useHomeHeaderUnifiedSuite = (
  props: HomeHeaderUnifiedSuiteProps,
) => {
  const [activeId, setActiveId] = useState(props.items.at(0)?.id);
  const [activeItemId, setActiveItemId] = useState(
    props.items.at(0)?.items?.at(0)?.id,
  );
  const [image, setImage] = useState(props.items.at(0)?.items?.at(0)?.image);

  const onChangeActive = useCallback((item: Question) => {
    setActiveId(item.id);
    setActiveItemId(item.items.at(0)?.id);
    setImage(item.items.length ? item.items.at(0)?.image : item.image);
  }, []);

  const onChangeActiveItem = useCallback((item: QuestionItem) => {
    setActiveItemId(item.id);
    setImage(item.image);
  }, []);

  return {
    activeId,
    activeItemId,
    image,
    onChangeActive,
    onChangeActiveItem,
  };
};
