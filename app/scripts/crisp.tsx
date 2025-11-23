"use client";

import Script from "next/script";

export function CrispLoader() {
  return (
    <Script
      id="crisp"
      strategy="afterInteractive"
      async
      dangerouslySetInnerHTML={{
        __html: `window.$crisp=[];window.CRISP_WEBSITE_ID="0b31dddd-afb3-4dfd-b51e-b0f047034298";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`,
      }}
    />
  );
}
