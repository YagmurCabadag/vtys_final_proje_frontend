import useCheckAuth from "@/libs/hooks/useCheckAuth";
import AddQuestView from "@/views/Modules/Quest/AddQuest";
import React from "react";

const AddQuest = () => {
  useCheckAuth({
    rootType: "private",
  });
  return <AddQuestView />;
};

export default AddQuest;
