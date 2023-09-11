import HeadContent from "@/components/HeadContent";
import { LayoutMain } from "@/components/layout";
import Spinner from "@/components/loading/Spinner";
import PropertyDetails from "@/modules/property/PropertyDetails";
import { getProperty } from "@/store/property.services";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";
// https://something.api/property/abc-land -> PropertySlugPage
const PropertyDetailsPage = () => {
  
  return (
    <LayoutMain>
      
      <PropertyDetails></PropertyDetails>
    </LayoutMain>
  );
};

export default PropertyDetailsPage;
