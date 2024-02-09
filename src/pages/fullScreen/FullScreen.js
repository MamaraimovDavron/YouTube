import React from "react";
import styled from "styled-components";
import Video from "../../Video/index";

const Box = styled.div`
  width: 100%;
  height: 100vh;
  .video-player {
    width: 80%;
    height: 80%;
    border: 1px solid;
  }
`;

const FullScreen = ({ title, link }) => {
  return (
    <Box>
      <div className="video-player">
        <Video title={title} link={link} />
      </div>
    </Box>
  );
};

export default FullScreen;
