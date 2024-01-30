// import { Box, Typography } from "@mui/material";
import React from "react";
import "react-html5video/dist/styles.css";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 5px 1px gray;
  p {
    width: 360px;
    height: 50px;
    padding: 5px;
    margin: 0;
    font-size: 14px;
    text-align: justify;
    font-weight: 600;
    cursor: pointer;
  }
`;

const Video = ({ link, title }) => {
  return (
    <Div>
      <iframe
        width="360"
        height="215"
        src={link}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <p>{title}</p>
    </Div>
  );
};

export default Video;
