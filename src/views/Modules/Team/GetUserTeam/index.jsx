import CardComponent from "@/components/Card";
import { Alert, Grid } from "@mui/material";
import React, { useEffect } from "react";
import TeamInformation from "./components/TeamInformation";
import TeamMembers from "./components/TeamMembers";
import { useDispatch, useSelector } from "react-redux";
import { getTeamMembersAction } from "@/libs/redux/features/Team/asyncActions";

const GetUserTeamView = () => {
  const dispatch = useDispatch();
  const { team } = useSelector((state) => state.team);

  useEffect(() => {
    dispatch(getTeamMembersAction());
  }, [dispatch]);
  return (
    <>
      {team ? (
        <Grid container spacing={2}>
          <Grid item xs={12}>
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
              <TeamInformation />
            </CardComponent>
          </Grid>

          <Grid item xs={12}>
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
              <TeamMembers />
            </CardComponent>
          </Grid>
        </Grid>
      ) : (
        <CardComponent
          className="
            w-full
            mx-auto
            p-10
            shadow-lg
            rounded-md
            text-gray-800
            flex
            justify-center
            items-center
            
            "
        >
          <Alert
            severity="warning"
            sx={{
              width: "100%",
              height: "200px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Takımınız bulunmamaktadır. Lütfen takım oluşturunuz.
          </Alert>
        </CardComponent>
      )}
    </>
  );
};

export default GetUserTeamView;
