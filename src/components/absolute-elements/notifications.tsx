"use client";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./notifications.css";

const Notifications = () => {
  return (
    <ToastContainer
      limit={3}
      position='top-right'
      autoClose={3000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      pauseOnHover={false}
    />
  );
};

export default Notifications;
