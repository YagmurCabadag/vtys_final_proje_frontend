import * as yup from "yup";

export const CreateProjectSchema = yup.object({
  name: yup.string().required("Proje adı zorunludur."),
  description: yup.string().required("Proje açıklaması zorunludur."),
  endDate: yup.string().required("Proje bitiş tarihi zorunludur."),
});
