import * as yup from "yup";

export const createQuestSchema = yup.object().shape({
  project: yup.string().required("Proje adı zorunludur"),
  title: yup.string().required("Görev başlığı zorunludur"),
  description: yup.string().required("Görev açıklaması zorunludur"),
  assignedTo: yup.string().required("Göreve atanan kişi zorunludur"),
  endDate: yup.string().required("Görev bitiş tarihi zorunludur"),
});
