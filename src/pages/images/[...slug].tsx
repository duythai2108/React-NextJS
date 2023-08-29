import { useRouter } from "next/router";
import React from "react";

const ImageSlugPage = () => {
  const router = useRouter();
  console.log("🚀 ~ ImageSlugPage ~ router:", router)
  return <div>Image Slug Page</div>;
};

export default ImageSlugPage;
