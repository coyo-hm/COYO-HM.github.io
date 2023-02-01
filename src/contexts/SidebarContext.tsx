import { createContext, useState } from "react";
import { TagWithCount } from "@src/type";
import SideBar from "@components/common/Sidebar";

interface ISidebarContext {
  setTags: (tags: TagWithCount[]) => void;
  openSidebar: () => void;
  closeSidebar: () => void;
}

export const SidebarContext = createContext<ISidebarContext | null>(null);

interface ISidebarProvider {
  children: any;
}

const SidebarProvider = ({ children }: ISidebarProvider) => {
  const [isOpenedDrawer, setIsOpenedDrawer] = useState(false);
  const [tags, setTags] = useState<TagWithCount[]>([]);

  const openSidebar = () => setIsOpenedDrawer(true);
  const closeSidebar = () => setIsOpenedDrawer(false);

  return (
    <SidebarContext.Provider value={{ setTags, openSidebar, closeSidebar }}>
      {children}
      {isOpenedDrawer && <SideBar tags={tags} />}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
