import useCheckAuth from "@/libs/hooks/useCheckAuth";
import GetUserProjectView from "@/views/Modules/Project/ProjectsList";
import React from "react";

const GetUserProject = () => {
  useCheckAuth({
    rootType: "private",
  });
  return <GetUserProjectView />;
};

export default GetUserProject;
