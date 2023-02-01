import { useEffect } from "react";

const useScrollBlock = () => {
  useEffect(() => {
    if (document.body.style.overflow !== "hidden") {
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = "auto";
      };
    }
  }, []);
};

export default useScrollBlock;
