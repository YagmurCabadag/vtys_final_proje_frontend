import React, { useState } from "react";
import Link from "next/link";
import { useFormik } from "formik";
import { Grid, Typography, Box, Container } from "@mui/material";
import TextFieldComponent from "@/components/TextField";
import PaperComponent from "@/components/Paper";
import ButtonComponent from "@/components/Button";
import DividerComponent from "@/components/Divider";
import { useRouter } from "next/navigation";
import SpinnerComponent from "@/components/Spinner";
import { RegisterSchema } from "@/validations/register-schema";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { registerAction } from "@/libs/redux/features/Auth/asyncActions";
import {
  toastErrorNotify,
  toastSuccessNotify,
} from "@/libs/helper/toastHelper";

const RegisterView = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      setLoading(true);
      setDisabled(true);

      let data = values;
      dispatch(registerAction(data)).then((res) => {
        if (res.payload) {
          toastSuccessNotify("Kayıt Başarılı");
        } else {
          toastErrorNotify("Kayıt Başarısız");
        }
        setLoading(false);
        setDisabled(false);
      });
    },
  });

  return (
    <Grid
      container
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/assets/desktop-wallpaper-the-project-project-management.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Grid container>
        <Grid
          item
          xs={0}
          lg={7}
          sx={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Grid>
        <Grid
          item
          xs={12}
          lg={5}
          container
          alignItems="center"
          justifyContent="center"
          sx={{
            height: "100vh",
          }}
        >
          <Container
            className="
            flex flex-col justify-center items-center 
             w-full


          "
            sx={{
              height: "90vh",
            }}
          >
            <PaperComponent
              elevation={2}
              className="
                flex flex-col first-letter:capitalize
                justify-center items-center
                h-full w-full
                bg-slate-50 
                text-black dark:text-white
                rounded-2xl shadow-2xl shadow-gray-400
                sm:p-12 md:p-16 lg:p-20 xl:p-24
                overflow-y-scroll
            "
            >
              <Typography
                variant="h5"
                gutterBottom
                className="
                text-3xl font-semibold
                mb-4
                text-black
                flex flex-col justify-center items-center
            "
              >
                <Link
                  href="/account/login"
                  className="text-blue-500 
                flex flex-row justify-center items-center
                rounded-full
                p-2
                
                "
                >
                  <Image
                    src="/assets/images.png"
                    width={200}
                    height={200}
                    alt="logo"
                    className="w-full h-full"
                  />
                </Link>
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                className="
                text-2xl font-semibold
                mb-4
                text-black 
            "
              >
                VTYS ODEV - Kayıt Ol
              </Typography>
              <DividerComponent className="my-4" />
              <form
                onSubmit={formik.handleSubmit}
                className="
                mx-4 lg:mx-0
              "
              >
                <Grid container>
                  <Grid item xs={12}>
                    <TextFieldComponent
                      fullWidth
                      id="username"
                      name="username"
                      label="Kullanıcı Adı"
                      variant="outlined"
                      margin="normal"
                      value={formik.values.username}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.username &&
                        Boolean(formik.errors.username)
                      }
                      helperText={
                        formik.touched.username && formik.errors.username
                      }
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextFieldComponent
                      fullWidth
                      id="email"
                      name="email"
                      label="E-posta Adresi"
                      variant="outlined"
                      margin="normal"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextFieldComponent
                      fullWidth
                      id="password"
                      name="password"
                      label="Şifre"
                      variant="outlined"
                      margin="normal"
                      type="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.password &&
                        Boolean(formik.errors.password)
                      }
                      helperText={
                        formik.touched.password && formik.errors.password
                      }
                    />
                  </Grid>
                </Grid>

                <Box mt={2}>
                  <ButtonComponent
                    fullWidth
                    variant="contained"
                    disabled={disabled}
                    color="secondary"
                    type="submit"
                    className="
                    text-white
                    bg-purple-500
                    hover:bg-purple-600
                    focus:ring-purple-500
                    focus:ring-offset-purple-200
                    disabled:opacity-50

                  "
                  >
                    {loading ? (
                      <>
                        Kayıt Olunuyor...
                        <SpinnerComponent
                          color="secondary"
                          size={20}
                          sx={{
                            marginLeft: "10px",
                            color: "#fff",
                          }}
                        />
                      </>
                    ) : (
                      "Kayıt Ol"
                    )}
                  </ButtonComponent>

                  <DividerComponent className="my-4" />
                  <Grid container spacing={2}>
                    <Grid item xs={12} className="text-right">
                      <Link href="/account/login">
                        <ButtonComponent
                          color="primary"
                          variant="text"
                          className="
                            text-blue-500
                            hover:text-blue-600
                            focus:ring-blue-500
                            focus:ring-offset-blue-200
                            disabled:opacity-50
                            capitalize
                        "
                        >
                          Zaten Hesabın Var Mı?
                        </ButtonComponent>
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </form>
            </PaperComponent>
          </Container>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RegisterView;
