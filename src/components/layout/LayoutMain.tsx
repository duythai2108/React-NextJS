import React from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

interface ILayoutMainProps {
  children: React.ReactNode;
}
const LayoutMain = ({ children }: ILayoutMainProps) => {
  return (
    <>
      <Topbar></Topbar>
      <div className="grid grid-cols-[250px_minmax(0,1fr)] min-h-screen">
        <Sidebar></Sidebar>
        <div className="">{children}</div>
      </div>
    </>
  );
};

export default LayoutMain;
