import { Dispatch, SetStateAction, useEffect } from "react";
import { POST_TITLE_SELECTOR } from "@src/constants";

const useScrollTitle = (
  setActiveHeaderId: Dispatch<SetStateAction<string>>
) => {
  const scroll = (id: string, behavior: ScrollBehavior = "smooth") => {
    const targetElement = document.getElementById(id);
    if (!targetElement) return;
    targetElement.scrollIntoView({ behavior });
    setActiveHeaderId(id);
  };

  useEffect(() => {
    const decodedHash = decodeURI(window.location.hash.slice(1));
    const titleElements = Array.from(
      document.querySelectorAll(POST_TITLE_SELECTOR)
    );
    if (!decodedHash || titleElements.length === 0) return;
    const target = titleElements.find((post) => post.id === decodedHash);
    if (!target) return;
    scroll(target.id, "auto");
  }, []);

  return scroll;
};

export default useScrollTitle;
