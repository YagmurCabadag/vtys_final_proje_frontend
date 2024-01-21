import CardComponent from "@/components/Card";
import TextFieldComponent from "@/components/TextField";
import {
  toastErrorNotify,
  toastSuccessNotify,
} from "@/libs/helper/toastHelper";
import { createTeamAction } from "@/libs/redux/features/Team/asyncActions";
import { createTeamSchema } from "@/validations/create-team-schema";
import { Button, Grid } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";

const CreateTeamView = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
    },
    validationSchema: createTeamSchema,
    onSubmit: (values) => {
      const data = {
        name: values.name,
        description: values.description,
      };
      console.log("🚀 ~ CreateTeamView ~ data:", data);

      dispatch(
        createTeamAction({
          name: values.name,
          description: values.description,
        })
      ).then((res) => {
        if (res.payload) {
          toastSuccessNotify("Takım başarıyla oluşturuldu");
        } else {
          toastErrorNotify("Takım oluşturulurken bir hata oluştu");
        }
      });
      //  dispatch(createTeamProject({ data })).then((res) => {
      //    if (res.payload) {
      //      toastSuccessNotify("Proje başarıyla oluşturuldu");
      //    } else {
      //      toastErrorNotify("Proje oluşturulurken bir hata oluştu");
      //    }
      //  });
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
              label="Takım Adı"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextFieldComponent
              label="Takım Açıklaması"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
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

export default CreateTeamView;
