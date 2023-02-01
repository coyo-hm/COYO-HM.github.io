import { useContext } from "react";
import { SidebarContext } from "@src/contexts/SidebarContext";

const useSidebar = () => {
  const sidebarProps = useContext(SidebarContext);
  if (!sidebarProps) {
    throw new Error("NO SIDEBAR");
  }
  return sidebarProps;
};

export default useSidebar;
