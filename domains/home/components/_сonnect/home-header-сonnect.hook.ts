import { useState, useCallback } from "react";

import type {
  HomeHeaderConnectProps,
  Question,
  QuestionItem,
} from "./home-header-сonnect";

export const useHomeHeaderConnect = (props: HomeHeaderConnectProps) => {
  const [showFull, setShowFull] = useState(!props.withFullDescription);
  const [activeId, setActiveId] = useState(props.items.at(0)?.id);
  const [activeItemId, setActiveItemId] = useState(
    props.items.at(0)?.items?.at(0)?.id,
  );
  const [image, setImage] = useState(props.items.at(0)?.items?.at(0)?.image);

  const onChangeActive = useCallback(
    (item: Question) => {
      setActiveId(item.id);
      setActiveItemId(item.items.at(0)?.id);

      const _image = item.items.length ? item.items.at(0)?.image : item.image;

      if (image !== _image) setImage(_image);
    },
    [image],
  );

  const onChangeActiveItem = useCallback((item: QuestionItem) => {
    setActiveItemId(item.id);
    setImage(item.image);
  }, []);

  const onTriggerShowFull = useCallback(() => {
    setShowFull(!showFull);
  }, [showFull]);

  return {
    showFull,
    activeId,
    activeItemId,
    image,
    onChangeActive,
    onChangeActiveItem,
    onTriggerShowFull,
  };
};
