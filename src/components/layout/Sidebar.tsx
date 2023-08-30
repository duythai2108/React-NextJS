import { sidebarLink } from "@/constants/general.const";
import { TSidebarLink } from "@/types/general.type";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Sidebar = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <div className="bg-grayfc py-6 px-4">
      {sidebarLink.map((link) => (
        <SidebarLink
          isActive={pathname === link.path}
          key={link.title}
          link={link}
        ></SidebarLink>
      ))}
    </div>
  );
};
interface ISidebarLinkProps {
  link: TSidebarLink;
  isActive: boolean;
}
function SidebarLink({ link, isActive }: ISidebarLinkProps) {
  return (
    <Link
      href={link.path}
      className={`px-6 py-4 flex items-center gap-c10 text-base font-bold text-gray80 rounded-xl ${
        isActive ? "bg-primary text-grayfc" : "hover:text-primary"
      }`}
    >
      <span>{link.icon}</span>
      <span>{link.title}</span>
    </Link>
  );
}
export default Sidebar;
