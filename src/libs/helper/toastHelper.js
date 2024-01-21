import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

export const toastWarnNotify = (msg) => {
  toast.warn(msg, {
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const toastSuccessNotify = (msg) => {
  toast.success(msg, {
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const toastErrorNotify = (msg) => {
  toast.error(msg, {
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const toastInfoNotify = (msg) => {
  toast.info(msg, {
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

const swalHelper = () => {
  const defaultSwal = (
    title,
    text,
    icon,
    timer,
    cancelButtonText,
    confirmButtonText
  ) => {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      timer: timer,
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText,
    });
  };

  const yesNoSwal = ({ title, text, icon }) => {
    return Swal.fire({
      title: title,
      text: text,
      icon: icon,
      showCancelButton: true,
      confirmButtonColor: "#4d4d",
      cancelButtonColor: "#d33",
      confirmButtonText: "Evet",
      cancelButtonText: "Hayır",
    });
  };

  return {
    defaultSwal,
    yesNoSwal,
  };
};

export default swalHelper;
