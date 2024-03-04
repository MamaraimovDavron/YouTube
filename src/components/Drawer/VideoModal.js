import React from "react";
import { createPortal } from "react-dom";

const modalContainer = document.getElementById("video");
console.log(modalContainer, "modalContainer");

export const VideoModal = ({ children }) => {
  const modalBody = <div>{children}</div>;
  return createPortal(modalBody, modalContainer);
};
