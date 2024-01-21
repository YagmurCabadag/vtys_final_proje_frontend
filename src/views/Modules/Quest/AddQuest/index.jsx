/* eslint-disable react-hooks/exhaustive-deps */
import CardComponent from "@/components/Card";
import TextFieldComponent from "@/components/TextField";
import { createQuestSchema } from "@/validations/create-quest-schema";
import { Button, Grid, MenuItem } from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getTeamProjects } from "@/libs/redux/features/Project/asyncActions";
import { getTeamMembersAction } from "@/libs/redux/features/Team/asyncActions";
import { createQuestAction } from "@/libs/redux/features/Quest/asyncActions";
import moment from "moment";
import {
  toastErrorNotify,
  toastSuccessNotify,
} from "@/libs/helper/toastHelper";

const AddQuestView = () => {
  const dispatch = useDispatch();
  const [members, setMembers] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    dispatch(getTeamProjects()).then((res) => {
      setProjects(res.payload.data);
    });

    dispatch(getTeamMembersAction()).then((res) => {
      setMembers(res.payload.data);
    });
  }, []);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      project: "",
      assignedTo: "",
      endDate: "",
    },
    validationSchema: createQuestSchema,
    onSubmit: (values) => {
      const data = {
        title: values.title,
        description: values.description,
        project: values.project,
        assignedTo: values.assignedTo,
        endDate: moment(values.endDate).format("MM/DD/YYYY"),
      };

      console.log(data, "data");
      dispatch(createQuestAction(data)).then((res) => {
        if (res.payload) {
          toastSuccessNotify("Görev başarıyla oluşturuldu");
        } else {
          toastErrorNotify("Görev oluşturulurken bir hata oluştu");
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
              name="project"
              value={formik.values.project}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.project && formik.errors.project}
              helperText={formik.touched.project && formik.errors.project}
              select
            >
              {projects.map((project) => (
                <MenuItem key={project._id} value={project._id}>
                  {project.name}
                </MenuItem>
              ))}
            </TextFieldComponent>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextFieldComponent
              label="Görev Atanacak Kişi"
              name="assignedTo"
              value={formik.values.assignedTo}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.assignedTo && formik.errors.assignedTo}
              helperText={formik.touched.assignedTo && formik.errors.assignedTo}
              select
            >
              {members.map((member) => (
                <MenuItem key={member._id} value={member._id}>
                  {member.username}
                </MenuItem>
              ))}
            </TextFieldComponent>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextFieldComponent
              label="Görev Adı"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.title && formik.errors.title}
              helperText={formik.touched.title && formik.errors.title}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextFieldComponent
              label="Görev Açıklaması"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.description && formik.errors.description}
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
              Görevi Oluştur
            </Button>
          </Grid>
        </Grid>
      </form>
    </CardComponent>
  );
};

export default AddQuestView;
