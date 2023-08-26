"use client";

import { ReactElement } from "react";
import { ToastProvider as ToastContext } from "rc-toastr";
import "rc-toastr/dist/index.css";

type TestProps = {
  children: ReactElement;
};

export default function ToastProvider({ children }: TestProps) {
  return (
    <ToastContext
      config={{
        duration: 2000,
        position: "top-right",
        pauseOnHover: false,
        autoClose: true,
        showProgressBar: false,
        toastBackgroundColor: () => "red",
      }}
    >
      {children}
    </ToastContext>
  );
}
