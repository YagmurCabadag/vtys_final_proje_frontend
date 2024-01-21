import CardComponent from "@/components/Card";
import TextFieldComponent from "@/components/TextField";
import {
  toastErrorNotify,
  toastSuccessNotify,
} from "@/libs/helper/toastHelper";
import { createTeamProject } from "@/libs/redux/features/Project/asyncActions";
import { CreateProjectSchema } from "@/validations/create-project-schema";
import { Button, Grid } from "@mui/material";
import { useFormik } from "formik";
import moment from "moment";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";

const CreateProjectView = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      endDate: "",
    },
    validationSchema: CreateProjectSchema,
    onSubmit: (values) => {
      console.log("🚀 ~ CreateProjectView ~ values:", values);
      const data = {
        name: values.name,
        description: values.description,
        endDate: moment(values.endDate).format("MM/DD/YYYY"),
      };

      dispatch(createTeamProject({ data })).then((res) => {
        if (res.payload) {
          toastSuccessNotify("Proje başarıyla oluşturuldu");
        } else {
          toastErrorNotify("Proje oluşturulurken bir hata oluştu");
        }
      });
    },
  });

  return (
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
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={[2]}>
          <Grid item xs={12} md={6}>
            <TextFieldComponent
              label="Proje Adı"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextFieldComponent
              label="Proje Açıklaması"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <DatePicker
              selected={formik.values.endDate}
              onChange={(date) => formik.setFieldValue("endDate", date)}
              onBlur={formik.handleBlur}
              className="w-full border-2 cursor-pointer text-start h-full rounded py-4 px-4 placeholder-gray-500 mb-3"
              placeholderText="Bitiş Tarihi"
              dateFormat={"dd/MM/yyyy"}
              withPortal
            />
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </CardComponent>
  );
};

export default CreateProjectView;
