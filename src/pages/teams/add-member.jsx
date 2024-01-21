import useCheckAuth from "@/libs/hooks/useCheckAuth";
import AddMemberView from "@/views/Modules/Team/AddMember";
import React from "react";

const AddMember = () => {
  useCheckAuth({
    rootType: "private",
  });
  return <AddMemberView />;
};

export default AddMember;
