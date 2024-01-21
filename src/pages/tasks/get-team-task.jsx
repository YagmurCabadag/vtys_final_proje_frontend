import useCheckAuth from "@/libs/hooks/useCheckAuth";
import GetTeamQuestsView from "@/views/Modules/Quest/GetTeamQuests";
import React from "react";

const GetTeamQuests = () => {
  useCheckAuth({
    rootType: "private",
  });
  return <GetTeamQuestsView />;
};

export default GetTeamQuests;
