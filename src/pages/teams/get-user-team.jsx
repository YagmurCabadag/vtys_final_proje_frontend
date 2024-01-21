import useCheckAuth from "@/libs/hooks/useCheckAuth";
import GetUserTeamView from "@/views/Modules/Team/GetUserTeam";
import React from "react";

const GetUserTeam = () => {
  useCheckAuth({
    rootType: "private",
  });
  return <GetUserTeamView />;
};

export default GetUserTeam;
