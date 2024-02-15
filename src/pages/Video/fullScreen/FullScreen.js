import { React, useState, useEffect } from "react";
import styled from "styled-components";
// import Video from "../../Video/index";
// import { getLinks } from "../../../api";
import ReactPlayer from "react-player";
import { getLikes, getLinks } from "../../../api";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";

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
    border: 1px solid;
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

      .subscribe {
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

      .likes {
        display: flex;
        flex-direction: row;
        gap: 10px;

        .like {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          border: none;
          border-radius: 16px;
          padding: 8px 16px;
          gap: 5px;
          cursor: pointer;
          .icon {
            font-size: 20px;
          }
          p {
            margin: 0;
            padding: 0;
            font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
              "Lucida Sans", Arial, sans-serif;
          }
        }

        .dislike {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          border: none;
          border-radius: 16px;
          padding: 8px 16px;
          gap: 5px;
          cursor: pointer;

          .icon {
            font-size: 20px;
          }
          p {
            margin: 0;
            padding: 0;
            font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
              "Lucida Sans", Arial, sans-serif;
          }
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
  const [like, setLike] = useState([]);
  const [dislike, setDislike] = useState([]);

  console.log(like, "like");
  console.log(dislike, "dislike");
  // const [like, setLike] = useState({});

  const dislikeIncrement = () => {
    setDislike(dislike + 1);
  };

  const likeIncrement = () => {
    setLike(like + 1);
  };

  useEffect(() => {
    const getAllLinks = async () => {
      const data = await getLinks();
      setLike(data[0].like);
      setDislike(data[0].dislike);
    };
    getAllLinks();
  }, []);

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

          <button className="subscribe">Subscribe</button>

          {/* {links?.map((item, index) => {
            return (
              <div className="likes" key={index}>
                <button className="like">
                  <AiFillLike className="icon" />
                  <p>{item.like}</p>
                </button>
                <button className="dislike">
                  <AiFillDislike className="icon" />
                  <p>{item.dislike}</p>
                </button>
              </div>
            );
          })}  */}

          <div className="likes">
            <button className="like">
              <AiFillLike className="icon" onClick={likeIncrement} />
              <p>{like}</p>
            </button>
            <button className="dislike">
              <AiFillDislike className="icon" onClick={dislikeIncrement} />
              <p>{dislike}</p>
            </button>
          </div>
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
