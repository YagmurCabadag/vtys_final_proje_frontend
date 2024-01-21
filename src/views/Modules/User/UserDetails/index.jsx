import CardComponent from "@/components/Card";
import React from "react";
import UserDetailsCard from "./components/UserDetails";
import UserProjects from "./components/UserProjects";
import UserQuests from "./components/UserQuests";

const UserDetailsView = ({ data }) => {
  console.log("🚀 ~ UserDetailsView ~ data", data);

  return (
    <CardComponent
      className="
            w-full
            mx-auto
            shadow-lg
            rounded-md
            text-gray-800
            "
    >
      <CardComponent
        className="
            w-full
            mx-auto
            p-10
            shadow-lg
            rounded-md
            text-gray-800
      "
      >
        <UserDetailsCard user={data} />
      </CardComponent>

      <CardComponent
        className="
            w-full
            mt-5
            mx-auto
            shadow-lg
            rounded-md
            text-gray-800
            p-10
      "
      >
        <UserProjects projects={data?.projects} />
      </CardComponent>

      <CardComponent
        className="
            w-full
            mt-5
            mx-auto
            shadow-lg
            rounded-md
            text-gray-800
            p-10
      "
      >
        <UserQuests quests={data?.quests} />
      </CardComponent>
    </CardComponent>
  );
};

export default UserDetailsView;
