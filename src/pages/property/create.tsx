import { LayoutMain } from "@/components/layout";
import { addNewProperty } from "@/store/property.services";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";

const PropertyCreatePage = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: addNewProperty,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["properties"] });
    },
  });
  const handleCreateNewProperty = () => {
    mutation.mutate();
  };
  return (
    <LayoutMain>
      <button onClick={handleCreateNewProperty}>Add new property</button>
    </LayoutMain>
  );
};

export default PropertyCreatePage;
