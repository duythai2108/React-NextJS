import { LayoutMain } from "@/components/layout";
import { API_URL } from "@/config";
import PropertyItem from "@/modules/property/PropertyItem";
import { getProperties } from "@/store/property.services";
import { PropertyItemData } from "@/types/property.type";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import React, { useEffect } from "react";

const PropertyPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["properties"],
    queryFn: () => getProperties(),
    // refetchOnWindowFocus: false,
    // cacheTime: 10 * 60 * 1000, //10 min
    // staleTime: 5 * 60 * 1000, //5 min
  });
  const properties = data;
  return (
    <LayoutMain>
      <div className="flex items-center justify-between mb-5">
        <h1 className="font-bold text-[25px] text-primaryText">
          Property List
        </h1>
        <Link
          href="/property/create"
          className="flex items-center justify-center py-3 px-5 text-white bg-primary text-sm font-medium rounded-[10px] leading-normal"
        >
          + Add Property
        </Link>
      </div>
      <div className="p-5 bg-white rounded-2xl">
        <div className="" aria-label="filter"></div>
        <div
          className="grid grid-cols-2 gap-x-16 gap-y-6 mb-9"
          aria-label="list"
        >
          {properties &&
            properties.length > 0 &&
            properties.map((item: PropertyItemData) => (
              <PropertyItem item={item} key={item.id}></PropertyItem>
            ))}
        </div>
        <div
          className="flex items-center justify-between"
          aria-label="pagination"
        >
          <p className="text-gray80">Showing 1 to 10 Propertys</p>
          <div className="flex items-center gap-[10px]">
            <button className="w-9 h-9 rounded-lg flex items-center justify-center text-white bg-primary">
              1
            </button>
            <button className="w-9 h-9 rounded-lg flex items-center justify-center text-gray80 y">
              2
            </button>
          </div>
        </div>
      </div>
    </LayoutMain>
  );
};

export default PropertyPage;
