import { useRouter } from "next/router";
import { useEffect } from "react";
import { isDev } from "@libs/core";
import { usePathname } from "next/navigation";
import { sendGAEvent } from "@next/third-parties/google";

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID as string;
export const GTM_TRACKING_ID = process.env.NEXT_PUBLIC_GTM_ID as string;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = (
  action: Gtag.EventNames,
  { event_category, event_label, value }: Gtag.EventParams
) => {
  window.gtag("event", action, {
    event_category,
    event_label,
    value,
  });
};

export const useGtagRouting = () => {
  const router = useRouter();
  useEffect(() => {
    if (isDev) return;
    const handleRouteChange = (url: URL) => {
      pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
};

// https://velog.io/@clydehan/Next.js-14app-router%EC%97%90%EC%84%9C-GA4-GTM-nextthird-parties-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
export default function useGAPageView() {
  const pathname = usePathname(); // 현재 페이지 경로를 가져온다.

  useEffect(() => {
    sendGAEvent("page_view", { page_path: pathname }); // 페이지 경로가 변경될 때마다 페이지뷰 이벤트를 전송한다.
  }, [pathname]); // pathname이 변경될 때마다 useEffect 훅이 실행된다.

  return null;
}

export function GAPageView() {
  useGAPageView(); // useGAPageView 훅을 호출하여 페이지뷰 이벤트를 전송한다.
  return null;
}
