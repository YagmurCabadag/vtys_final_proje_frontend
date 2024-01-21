import * as yup from "yup";

export const createTeamSchema = yup.object().shape({
  name: yup.string().required("Takım adı zorunludur"),
  description: yup.string().required("Takım açıklaması zorunludur"),
});
