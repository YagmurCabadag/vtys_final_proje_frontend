import useCheckAuth from "@/libs/hooks/useCheckAuth";
import CreateTeamView from "@/views/Modules/Team/CreateTeam";
import React from "react";

const CreateTeam = () => {
  useCheckAuth({
    rootType: "private",
  });
  return <CreateTeamView />;
};

export default CreateTeam;
