import { UAParser } from "ua-parser-js";
import { OSName } from "ua-parser-js/enums";

import { useCallback } from "react";

export const useButtonDownload = () => {
  const onClick = useCallback(() => {
    const parser = new UAParser();
    const osName = parser.getResult().os.name;
    console.log("osName", osName);

    window.open(
      osName === OSName.MACOS || osName === OSName.IOS
        ? process.env.NEXT_PUBLIC_DOWNLOAD_APP
        : "/edoktors.apk",
      "_blank",
    );
  }, []);

  return { onClick };
};
