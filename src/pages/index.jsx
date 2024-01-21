import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const HomePage = () => {
  const isLogined = useSelector((state) => state?.auth?.isLogined);
  const router = useRouter();
  useEffect(() => {
    if (!isLogined) {
      router.push("/account/login");
    } else {
      router.push("/user/profile");
    }
  }, [isLogined]);
  return <div>index</div>;
};

export default HomePage;
