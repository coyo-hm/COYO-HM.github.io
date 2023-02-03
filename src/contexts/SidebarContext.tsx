import { createContext, useState } from "react";
import { TagWithCountType } from "@src/type";
import SideBar from "@components/common/Sidebar";

interface SidebarContextPropsType {
  setTags: (tags: TagWithCountType[]) => void;
  openSidebar: () => void;
  closeSidebar: () => void;
}

export const SidebarContext = createContext<SidebarContextPropsType | null>(
  null
);

interface SidebarProviderType {
  children: any;
}

const SidebarProvider = ({ children }: SidebarProviderType) => {
  const [isOpenedDrawer, setIsOpenedDrawer] = useState(false);
  const [tags, setTags] = useState<TagWithCountType[]>([]);

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
