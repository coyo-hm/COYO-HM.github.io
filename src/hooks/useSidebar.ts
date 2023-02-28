import { useContext, useEffect } from "react";
import { SidebarContext } from "@src/contexts/SidebarContext";
import { TagWithCountType } from "@type/index";

const useSidebar = (tags?: TagWithCountType[]) => {
  const sidebarProps = useContext(SidebarContext);
  if (!sidebarProps) {
    throw new Error("NO SIDEBAR");
  }

  useEffect(() => {
    if (!!tags && !!sidebarProps) {
      const { setTags } = sidebarProps;
      setTags(tags);
    }
  }, [sidebarProps, tags]);

  return sidebarProps;
};

export default useSidebar;
