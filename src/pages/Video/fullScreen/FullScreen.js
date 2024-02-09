import { React, useState, useEffect } from "react";
import styled from "styled-components";
import Video from "../../Video/index";
import { getLinks } from "../../../api";
import ReactPlayer from "react-player";

const Box = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .details {
    /* height: calc(100%-88vh); */
    height: 12vh;
    /* background-color: red; */
  }
`;

const FullScreen = () => {
  const [link, setLink] = useState([]);

  console.log(link, "links");
  useEffect(() => {
    const getAllLinks = async () => {
      const data = await getLinks();
      setLink(data);
    };
    getAllLinks();
  }, []);

  return (
    <Box>
      <ReactPlayer
        url={link}
        // url="https://www.youtube.com/watch?v=uMQnn8xU7qs"
        width="100%"
        height="100%"
        controls
      />
      <div className="details">
        <h3>B. R. I. Tlemcen. 3</h3>
        <div className="others">
          <img
            src="https://avatars.mds.yandex.net/i?id=a33621d9ba6d427aef323af416295d92660daa30-8972446-images-thumbs&n=13"
            alt=""
          />
          <span>
            <h4>Juba Lotfi</h4>
            <h6>4,92 тыс. подписчиков</h6>
          </span>

          <button>Subscribe</button>
        </div>
      </div>
    </Box>
  );
};

export default FullScreen;
