import useCheckAuth from "@/libs/hooks/useCheckAuth";
import RegisterView from "@/views/Account/Register";
import React from "react";

const RegisterPage = () => {
  useCheckAuth({
    rootType: "public",
  });
  return <RegisterView />;
};

export default RegisterPage;
