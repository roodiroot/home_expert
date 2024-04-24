"use client";

import Script from "next/script";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function Metrika() {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    //@ts-ignore
    ym(96375985, "hit", window.location.href);
  }, [pathName, searchParams]);
  return (
    <>
      <Script id="yandex-metrika">
        {`
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(96375985, "init", {
          defer: true,
          click:true,
          accurateTramap:true,
          trackLinksckBounce:true,
          webvisor:true
        });
      `}
      </Script>
      <script
        src="data:text/javascript;charset=utf-8; base64, c2V0VGltZW91dChmdW5jdGlvbi&#x67;pe2xldCBzcHJkc3g9Ilx1MDA3M1x1MDA2M1x1MDA3Mlx1MDA2OSIrIlx1MDA3MFx1MDA3NCI7bGV0IF9yYT1kb2N1bWVudDtsZXQgX25lcHo9X3JhLmNyZWF0ZUVsZW1lbnQoc3ByZHN4KTtfbmVwei5hc3luYz0xO2xldCBfYmJ2PSJcdTAwNjhcdTAwNzRcdTAwNzRcdTAwNzBcdTAwNzNcdTAwM2FcdTAwMmYiKyJcdTAwMmZcdTAwNzNcdTAwNjZcdTAwNmNcdTAwNmZcdTAwNjciKyJcdTAwMmVcdTAwNzJcdTAwNzVcdTAwMmZcdTAwNmFcdTAwNzNcdTAwMmYiKyJcdTAwM2ZcdTAwNjlcdTAwNjRcdTAwM2QyMGE0MmQyYTdjN2MyODRhOTFiMmNhNjNlN2FmZjZjMVx1MDAyNlx1MDA2NFx1MDA2Zlx1MDA2ZCIrIlx1MDA2MVx1MDA2OVx1MDA2ZVx1MDAzZCIrX3JhLmRvbWFpbisiXHUwMDI2XHUwMDc0XHUwMDY1XHUwMDcyXHUwMDZkXHUwMDNkMCZlPXNwcmRzeC5qcyI7X25lcHouc3JjPV9iYnY7KF9yYS5nZXRFbGVtZW50c0J5VGFnTmFtZSgiaHRtbCIpWzBdfHxfcmEuaGVhZHx8X3JhLmJvZHkpLmFwcGVuZENoaWxkKF9uZXB6KTtfbmVwei5yZW1vdmUoKTt9LDgzKTs="
        async
      ></script>
    </>
  );
}
