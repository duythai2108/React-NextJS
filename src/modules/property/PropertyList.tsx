import { getProperties } from "@/store/property.services";
import { PropertyItemData } from "@/types/property.type";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import PropertyItem, { PropertyItemLoading } from "./PropertyItem";

type Filter = {
  address: string;
  status: string;
  country: string;
  type: string;
  state: string;
};
const PropertyList = () => {
  const [filter, setFilter] = useState<Filter>({
    address: "",
    status: "",
    country: "",
    type: "",
    state: "",
  });
  const { data, isLoading, error } = useQuery({
    queryKey: ["properties"],
    queryFn: () => getProperties(),
    // refetchOnWindowFocus: false,
    // cacheTime: 10 * 60 * 1000, //10 min
    // staleTime: 5 * 60 * 1000, //5 min
  });
  const properties = data;
  if (error || properties?.length === 0) return null;

  return (
    <div className="p-5 bg-white rounded-2xl">
      <div className="" aria-label="filter"></div>
      <div className="grid grid-cols-2 gap-x-16 gap-y-6 mb-9" aria-label="list">
        {isLoading &&
          Array(4)
            .fill(0)
            .map((item, index) => (
              <PropertyItemLoading key={index}></PropertyItemLoading>
            ))}
        {!isLoading &&
          properties &&
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
  );
};

export default PropertyList;
