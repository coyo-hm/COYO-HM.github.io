import useScrollBlock from "@hooks/useScrollBlock";
import { TagWithCount } from "@src/type";
import useSidebar from "@hooks/useSidebar";

const SideBar = ({ tags }: { tags: TagWithCount[] }) => {
  console.log("SideBar");
  const { closeSidebar } = useSidebar();
  useScrollBlock();

  return (
    <div className={`inset-0 m-0 p-0 fixed w-screen h-full`}>
      <div className={`m-0 p-0 w-full h-full opacity-70 bg-neutral-800`} />
      <div className={``}>
        <button onClick={closeSidebar}></button>
      </div>
    </div>
  );
};

export default SideBar;
