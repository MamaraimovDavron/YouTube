import { React, useState, useEffect } from "react";
import styled from "styled-components";
// import Video from "../../Video/index";
// import { getLinks } from "../../../api";
import ReactPlayer from "react-player";
import { getLinks } from "../../../api";

const Box = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .details {
    /* height: calc(100%-88vh); */
    /* margin-top: 10px; */
    height: 12vh;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
    padding: 20px 10px;
    h3 {
      font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
        "Lucida Sans", Arial, sans-serif;
      font-size: 15px;
      padding: 0;
      margin: 0;
    }

    .others {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      gap: 40px;
      img {
        width: 40px;
      }

      span {
        display: flex;
        flex-direction: column;
        gap: 5px;
        h4 {
          padding: 0;
          margin: 0;
          font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
            "Lucida Sans", Arial, sans-serif;
        }
        h6 {
          padding: 0;
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
        }
      }

      button {
        border: none;
        padding: 8px 24px;
        border-radius: 16px;
        font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
          "Lucida Sans", Arial, sans-serif;
        font-weight: bold;
        font-size: 15px;
        background-color: black;
        color: white;
        &:hover {
          background-color: #010;
          cursor: pointer;
        }
      }
    }
  }

  .commentBox {
    display: flex;
    flex-direction: row;
    padding: 0px 10px;
    gap: 20px;
    img {
      width: 40px;
      height: 40px;
      object-fit: cover;
      border-radius: 50%;
    }
    input {
      width: 60%;
      font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
        "Lucida Sans", Arial, sans-serif;
      border: none;
      outline: none;
      border-bottom: 1px solid gray;
    }
  }
`;

const FullScreen = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const getAllLinks = async () => {
      const data = await getLinks();
      setLinks(data);
    };
    getAllLinks();
  }, []);

  console.log(links, "linksFull");

  return (
    <Box>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=uMQnn8xU7qs"
        // url="https://www.youtube.com/watch?v=uMQnn8xU7qs"
        width="100%"
        height="100%"
        playing
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

      <div className="commentBox">
        <img
          src="https://www.kino-teatr.ru/news/27698/245954.jpg"
          alt="pinterest"
        />
        <input type="text" placeholder="Send Comment" />
      </div>
    </Box>
  );
};

export default FullScreen;
