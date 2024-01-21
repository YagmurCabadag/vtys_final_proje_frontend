/* eslint-disable react-hooks/exhaustive-deps */
import AvatarComponent from "@/components/Avatar";
import ListComponent from "@/components/List/List";
import ListItemComponent from "@/components/List/ListItem";
import { dateFormatter } from "@/libs/helper/DateConverter";
import {
  getTeamLeaderAction,
  getUserTeamAction,
} from "@/libs/redux/features/Team/asyncActions";
import { Icon } from "@iconify/react";
import { Grid, ListItemText } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const TeamInformation = () => {
  const team = useSelector((state) => state?.team?.team);
  const teamLeader = useSelector((state) => state?.team?.teamLeader);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserTeamAction())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        dispatch(
          getTeamLeaderAction({
            teamLeader: team?.teamLeader,
          })
        );
      });
  }, []);
  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        className="flex justify-center items-center"
      >
        <AvatarComponent
          sx={{
            width: "100px",
            height: "100px",
            fontSize: "3rem",
            backgroundColor: "#3f51b5",
            color: "#fff",
          }}
        >
          <Icon icon="mdi:account-group" />
        </AvatarComponent>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <ListComponent>
          <Grid container className="flex justify-center items-center">
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <ListItemComponent>
                <ListItemText primary="Takım Adı" secondary={team?.name} />
              </ListItemComponent>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6}>
              <ListItemComponent>
                <ListItemText
                  primary="Takım Oluşturulma Tarihi"
                  secondary={dateFormatter.momentFormatterWithHours(
                    team?.createdAt
                  )}
                />
              </ListItemComponent>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6}>
              <ListItemComponent>
                <ListItemText
                  primary="Takım Lideri"
                  secondary={teamLeader?.username}
                />
              </ListItemComponent>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6}>
              <ListItemComponent>
                <ListItemText
                  primary="Takım Lideri Email"
                  secondary={teamLeader?.email}
                />
              </ListItemComponent>
            </Grid>
          </Grid>
        </ListComponent>
      </Grid>
    </Grid>
  );
};

export default TeamInformation;
