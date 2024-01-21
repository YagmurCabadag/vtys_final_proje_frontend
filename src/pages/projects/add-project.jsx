import useCheckAuth from "@/libs/hooks/useCheckAuth";
import CreateProjectView from "@/views/Modules/Project/CreateProject";
import React from "react";

const CreateProject = () => {
  useCheckAuth({
    rootType: "private",
  });
  return <CreateProjectView />;
};

export default CreateProject;
