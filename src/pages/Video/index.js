import { useState } from "react";
import React from "react";
import "react-html5video/dist/styles.css";
import styled from "styled-components";
import ReactPlayer from "react-player/youtube";
import { Link, useParams } from "react-router-dom";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 5px 1px gray;
  position: relative;
  width: 360px;
  height: 220px;
  z-index: 0;
  position: relative;

  .up-box-1 {
    width: 100%;
    height: 100%;
    background-color: transparent;
    opacity: 0.1;
    position: absolute;
  }
  .up-box-2 {
    display: none;
  }
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
  // const [state, setState] = useState(true);

  // const handleState = () => {
  //   setState(!state);
  // };

  return (
    <>
      <Div>
        <ReactPlayer url={link} width="100%" height="100%" controls />
        <p>{title}</p>
      </Div>
    </>
  );
};

export default Video;
