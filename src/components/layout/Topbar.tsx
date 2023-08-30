import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconNotification, IconSearch } from "../icons";

const Topbar = () => {
  return (
    <div className="bg-grayfc h-[70px] py-4 px-5 flex items-center justify-between">
      <div className="flex items-center gap-[82px] flex-1">
        <Logo />
        <Search />
      </div>
      <User />
    </div>
  );
};

function Logo({}) {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/logo.png"
        alt="Yariga"
        width={173}
        height={35}
        priority={true}
      />
    </Link>
  );
}

function Search({}) {
  return (
    <div className="px-[10px] rounded-lg bg-grayf4 flex items-center gap-2 flex-[0_1_405px] h-[38px]">
      <IconSearch></IconSearch>
      <input
        className="bg-transparent text-xs font-normal text-primary placeholder:text-gray80 outline-none w-full"
        type="text"
        placeholder="Search Property, Customer etc"
      />
    </div>
  );
}

function User({}) {
  return (
    <div className="flex items-center gap-5 flex-shrink-0">
      <span className="flex-shrink-0">
        <IconNotification></IconNotification>
      </span>
      <div className="flex items-center gap-[10px] flex-shrink-0">
        <Image
          src="https://source.unsplash.com/random"
          alt="mac"
          width={40}
          height={40}
          className="rounded-full object-cover w-10 h-10"
        />
        <div className="flex flex-col">
          <h4 className="font-semibold">Hawkins Maru</h4>
          <span className="text-gray80">Company Manager</span>
        </div>
      </div>
    </div>
  );
}
export default Topbar;
