/* eslint-disable react-hooks/exhaustive-deps */
import useCheckAuth from "@/libs/hooks/useCheckAuth";
import ProfileView from "@/views/Modules/User/Profile";
import React from "react";

const ProfilePage = () => {
  useCheckAuth({
    rootType: "private",
  });
  return <ProfileView />;
};

export default ProfilePage;
