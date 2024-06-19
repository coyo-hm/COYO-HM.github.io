import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { POST_TITLE_SELECTOR } from "@constants/post";

const useIntersectionObserver = (
  pathname: string | null,
  setActiveHeaderId: Dispatch<SetStateAction<string>>
) => {
  const headersRef = useRef<any>({});

  useEffect(() => {
    headersRef.current = {};
    const callback: IntersectionObserverCallback = (headers) => {
      headersRef.current = headers.reduce((dict: any, headerElement) => {
        dict[headerElement.target.id] = headerElement;
        return dict;
      }, headersRef.current);

      const visibleHeaders: IntersectionObserverEntry[] = [];

      Object.keys(headersRef.current).forEach((key) => {
        const headerElement = headersRef.current[key];
        if (headerElement.isIntersecting) {
          visibleHeaders.push(headerElement);
        }
      });

      if (visibleHeaders?.length > 0) {
        setActiveHeaderId(visibleHeaders[0].target.id);
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: "-50px 0px 0px 0px",
    });

    const titleElements = Array.from(
      document.querySelectorAll(POST_TITLE_SELECTOR)
    );

    titleElements.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (!!element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [pathname]);
};
export default useIntersectionObserver;
