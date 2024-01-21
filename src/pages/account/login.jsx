import useCheckAuth from "@/libs/hooks/useCheckAuth";
import LoginView from "@/views/Account/Login";
import React from "react";

const LoginPage = () => {
  useCheckAuth({
    rootType: "public",
  });

  return <LoginView />;
};

export default LoginPage;
