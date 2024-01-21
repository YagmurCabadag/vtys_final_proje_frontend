/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const useCheckAuth = ({ rootType }) => {
  const isLogined = useSelector((state) => state?.auth?.isLogined);
  const router = useRouter();

  useEffect(() => {
    if (rootType === "public" && isLogined) {
      router.push("/user/profile");
    } else if (rootType === "private" && !isLogined) {
      router.push("/account/login");
    }
  }, [isLogined]);
};

export default useCheckAuth;
