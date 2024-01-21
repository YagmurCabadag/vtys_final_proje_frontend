import axiosBase from "@/config/AxiosBase";
import useCheckAuth from "@/libs/hooks/useCheckAuth";
import { questTypes } from "@/types/apiTypes";
import UpdateQuestView from "@/views/Modules/Quest/UpdateQuest";
import { data } from "autoprefixer";
import React from "react";

const UpdateQuest = ({ data }) => {
  useCheckAuth({
    rootType: "private",
  });
  return <UpdateQuestView data={data} />;
};

export const getServerSideProps = async ({ params, req }) => {
  const id = params.id;
  const res = await axiosBase.get(`${questTypes.GET_QUEST_BY_ID}/${id}`, {
    headers: {
      cookie: req.headers.cookie,
    },
  });

  const data = res.data.data;
  console.log("🚀 ~ getServerSideProps ~ data:", data);

  return {
    props: {
      data,
    },
  };
};

export default UpdateQuest;
