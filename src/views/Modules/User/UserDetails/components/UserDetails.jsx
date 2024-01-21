import AvatarComponent from "@/components/Avatar";
import ListComponent from "@/components/List/List";
import ListItemComponent from "@/components/List/ListItem";
import { dateFormatter } from "@/libs/helper/DateConverter";
import { getUserTeamAction } from "@/libs/redux/features/Team/asyncActions";
import { Grid, ListItemText } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const UserDetailsCard = ({ user }) => {
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
            background: "#A367B1",
            color: "#fff",
          }}
        >
          {user?.username?.charAt(0).toUpperCase()}
        </AvatarComponent>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <ListComponent>
          <Grid container className="flex justify-center items-center">
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <ListItemComponent>
                <ListItemText
                  primary="Kullanıcı Adı"
                  secondary={user?.username}
                />
              </ListItemComponent>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <ListItemComponent>
                <ListItemText primary="Email" secondary={user?.email} />
              </ListItemComponent>
            </Grid>
            <Grid item xs={12} sm={12} lg={12}>
              <ListItemComponent>
                <ListItemText
                  primary="Hesap Oluşturulma Tarihi"
                  secondary={dateFormatter.momentFormatterWithHours(
                    user?.createdAt
                  )}
                />
              </ListItemComponent>
            </Grid>

            {/* <Grid item xs={12} sm={12} md={6} lg={6}>
              <ListItemComponent>
                <ListItemText
                  primary="Takım"
                  secondary={team?.name || "Takım Bulunamadı"}
                />
              </ListItemComponent>
            </Grid> */}
            {/* <Grid item xs={12} sm={12} md={6} lg={6}>
              <ListItemComponent>
                <ListItemText
                  primary="Takım Oluşturulma Tarihi"
                  secondary={
                    dateFormatter.momentFormatterWithHours(team?.createdAt) ||
                    "Takım Bulunamadı"
                  }
                />
              </ListItemComponent>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <ListItemComponent>
                <ListItemText
                  primary="Takım Üyeleri Sayısı"
                  secondary={team ? team?.members?.length : "Takım Bulunamadı"}
                />
              </ListItemComponent>
            </Grid> */}
          </Grid>
        </ListComponent>
      </Grid>
    </Grid>
  );
};

export default UserDetailsCard;
