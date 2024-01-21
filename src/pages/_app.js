import { store } from "@/libs/redux/store";
import "@/styles/globals.css";
import DefaultLayout from "@/views/Layout";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <DefaultLayout>
        <Component {...pageProps} />
        <ToastContainer />
      </DefaultLayout>
    </Provider>
  );
}
