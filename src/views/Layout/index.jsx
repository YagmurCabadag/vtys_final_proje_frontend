import React, { useEffect, useState } from "react";
import AppNavbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getProfileAction } from "@/libs/redux/features/Auth/asyncActions";

const DefaultLayout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const isLogined = useSelector((state) => state.auth.isLogined);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileAction());
  }, [dispatch]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      setIsLoading(true);
    };
  }, [isLogined]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      {isLogined ? <AppNavbar>{children}</AppNavbar> : <>{children}</>}
    </main>
  );
};

export default DefaultLayout;
