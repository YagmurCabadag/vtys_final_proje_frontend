import CardComponent from "@/components/Card";
import { Grid } from "@mui/material";
import React from "react";
import ProfileHeader from "./components/ProfileHeader";

const ProfileView = () => {
  return (
    <Grid container>
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
          <ProfileHeader />
        </CardComponent>

        {/* <CardComponent
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
          <ProfileBody />
        </CardComponent> */}
      </CardComponent>
    </Grid>
  );
};

export default ProfileView;
