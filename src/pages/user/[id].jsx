import axiosBase from "@/config/AxiosBase";
import useCheckAuth from "@/libs/hooks/useCheckAuth";
import { teamTypes } from "@/types/apiTypes";
import UserDetailsView from "@/views/Modules/User/UserDetails";
import React from "react";

const UserDetails = ({ data }) => {
  useCheckAuth({
    rootType: "private",
  });
  return <UserDetailsView data={data} />;
};

export const getServerSideProps = async ({ params, req }) => {
  const id = params.id;
  const res = await axiosBase.get(`${teamTypes.GET_TEAM_MEMBER}/${id}`, {
    headers: {
      cookie: req.headers.cookie,
    },
  });
  const data = res.data.data;

  return {
    props: {
      data,
    },
  };
};

export default UserDetails;
