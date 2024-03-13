import React from "react";
import { HiOutlineViewGrid } from "react-icons/hi";

interface ISidebarProps {}

const Sidebar: React.FC<ISidebarProps> = () => {
  return (
  <aside className="fixed flex items-center bg-neutral-950  h-full  px-6">
      <ul className="flex flex-col gap-12">
        <li className="">
          <a href="">
            <HiOutlineViewGrid className="text-color text-3xl	" />
          </a>
        </li>
        <li className="">
          <a href="">
            <HiOutlineViewGrid className="text-color text-3xl	" />
          </a>
        </li> 
      </ul>
    </aside>
  );
};

export default Sidebar;
