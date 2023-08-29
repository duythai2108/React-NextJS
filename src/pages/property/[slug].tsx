import { useRouter } from "next/router";
import React from "react";
//https://something.apyi/property/abc-land -> PropertySlugPage
const PropertySlugPage = () => {
  const router = useRouter();
  console.log("🚀 ~ PropertySlugPage ~ router:", router);
  return <div>Property slug page</div>;
};

export default PropertySlugPage;
