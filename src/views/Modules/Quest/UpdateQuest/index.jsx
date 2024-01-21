import CardComponent from "@/components/Card";
import TextFieldComponent from "@/components/TextField";
import { updateQuestSchema } from "@/validations/update-quest-schema";
import { Button, Grid, MenuItem } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { updateQuestAction } from "@/libs/redux/features/Quest/asyncActions";
import {
  toastErrorNotify,
  toastSuccessNotify,
} from "@/libs/helper/toastHelper";

const UpdateQuestView = ({ data }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      status: data.status,
      endDate: moment(data.endDate).toDate(),
    },
    validationSchema: updateQuestSchema,
    onSubmit: (values) => {
      console.log(values, "values");

      const transformedValues = {
        status: values.status,
        endDate: moment(values.endDate).format("DD/MM/YYYY"),
      };

      dispatch(
        updateQuestAction({
          quest: transformedValues,
          id: data._id,
        })
      ).then((res) => {
        console.log("🚀 ~ ).then ~ res:", res);
        if (res.payload) {
          toastSuccessNotify("Görev başarıyla güncellendi.");
        } else {
          toastErrorNotify("Görev güncellenirken bir hata oluştu.");
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
          <Grid item xs={12}>
            <TextFieldComponent
              name="status"
              label="Durum"
              value={formik.values.status}
              onChange={formik.handleChange}
              error={formik.touched.status && formik.errors.status}
              errorMessage={formik.errors.status}
              select
            >
              <MenuItem value="to_be_conducted">Yapılacak</MenuItem>
              <MenuItem value="in_progress">Devam Ediyor</MenuItem>
              <MenuItem value="completed">Tamamlandı</MenuItem>
            </TextFieldComponent>
          </Grid>

          <Grid item xs={12}>
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
              Görevi Güncelle
            </Button>
          </Grid>
        </Grid>
      </form>
    </CardComponent>
  );
};

export default UpdateQuestView;
