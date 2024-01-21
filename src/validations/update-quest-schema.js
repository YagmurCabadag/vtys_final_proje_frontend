import * as yup from "yup";

export const updateQuestSchema = yup.object().shape({
  status: yup.string().required("Görev durumu gereklidir"),
  endDate: yup.string().required("Görev bitiş tarihi gereklidir"),
});
