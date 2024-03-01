import React, { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 150px;
  /* height: 40px; */
  z-index: 99;
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  border-radius: 10px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  position: absolute;
  bottom: 130px;
  div {
    width: 100%;
    font-size: 10px;
    text-align: center;
    padding: 10px;
    h1 {
      padding: 0;
      margin: 0;
    }
  }
`;

const Modal = () => {
  return (
    <Box>
      <div>
        <h1>You added</h1>
      </div>
    </Box>
  );
};

export default Modal;
