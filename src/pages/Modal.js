import React, { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  border: 1px solid;
`;

const Modal = () => {
  const [isSubscribe, setIsSubscribe] = useState(true);

  return (
    <Box>
      {isSubscribe ? (
        <p>Siz bu kanalga a`zo bo`lgansiz</p>
      ) : (
        <p>Siz kanalga a`zo bo`ldingiz</p>
      )}
    </Box>
  );
};

export default Modal;
