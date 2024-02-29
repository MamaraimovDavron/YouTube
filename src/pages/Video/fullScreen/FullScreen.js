import { React, useState, useEffect } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import {
  fetchPosts,
  getInputValue,
  getLikes,
  getLinks,
  getSubscribers,
  putLikes,
  updatePost,
} from "../../../api";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import axios from "axios";
import { useRef } from "react";
import { useParams } from "react-router-dom";

const Box = styled.div`
  width: 100%;
  /* height: 90vh; */
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .details {
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
    form {
      width: 60%;
      height: 100%;
      .inputBox {
        display: flex;
        input {
          font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
            "Lucida Sans", Arial, sans-serif;
          border: none;
          outline: none;
          border-bottom: 1px solid gray;
          width: 100%;
          padding: 10px 0;
        }

        button {
          font-size: 13px;
          font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
            "Lucida Sans", Arial, sans-serif;
          border: none;
          outline: none;
          background-color: white;
          cursor: pointer;
        }
      }

      ul {
        display: flex;
        flex-direction: column-reverse;
        width: 100%;
        margin: 0;
        padding: 0;
        font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
          "Lucida Sans", Arial, sans-serif;

        li {
          list-style-type: none;
          padding: 10px 0px;
          font-style: italic;
          font-size: 14px;
        }

        li:hover {
          background-color: gray;
        }
      }
    }
  }
`;

const FullScreen = () => {
  const { id } = useParams();

  const inputValue = useRef("");
  const [comment, setComment] = useState([]);
  const [isLike, setIsLike] = useState(true);
  const [post, setPost] = useState([]);
  const [posts, setPosts] = useState();

  // const [like, setLike] = useState([]);
  // const [links, setLinks] = useState([]);

  // console.log(links, "lim");

  useEffect(() => {
    const getPosts = async () => {
      const postData = await fetchPosts();
      setPosts(postData);
    };

    getPosts();
  }, []);

  const handleUpdateLike = async (id) => {
    let likeValue = posts[id].like;
    console.log(likeValue);

    const updatedPost = {
      dislike: false,
      subscribe: true,
      channelName: "National Geographic",
      title: "How to use Axios in React (API Tutorial + Post Feed Project)",
      link: "https://youtu.be/AstpAjPpu0U?si=1GFlLyLVnu8-WlEw",
      imgUrl:
        "https://stroy-podskazka.ru/images/article/orig/2023/03/kustarnik-s-sinimi-cvetami.jpg",
      comment: "How to use Axios in React 1709184198960",
      subscribers: 150000,
      like: likeValue + (isLike ? 1 : -1),
    };

    // console.log(id);
    // const onLikeButtonClick = () => {
    //   setLike(like + (isLike ? -1 : 1));
    //   setIsLike(!isLike);
    // };

    const post = await updatePost(id, updatedPost);
    // setIsLike(!isLike);

    setPost(posts.map((p) => (p.id === id ? post : p)));
  };

  const handleUpdateDislike = async (id) => {
    let likeValue = posts[id].like;
    console.log(likeValue);

    const updatedPost = {
      dislike: false,
      subscribe: true,
      channelName: "National Geographic",
      title: "How to use Axios in React (API Tutorial + Post Feed Project)",
      link: "https://youtu.be/AstpAjPpu0U?si=1GFlLyLVnu8-WlEw",
      imgUrl:
        "https://stroy-podskazka.ru/images/article/orig/2023/03/kustarnik-s-sinimi-cvetami.jpg",
      comment: "How to use Axios in React 1709184198960",
      subscribers: 150000,
      like: likeValue + (likeValue > likeValue && isLike ? -1 : 1),
    };

    // console.log(id);
    // const onLikeButtonClick = () => {
    //   setLike(like + (isLike ? -1 : 1));
    //   setIsLike(!isLike);
    // };

    const post = await updatePost(id, updatedPost);
    // setIsLike(!isLike);

    setPost(posts.map((p) => (p.id === id ? post : p)));
  };
  // const getLike = async () => {
  //   const data = await getLikes();
  //   console.log(data, "myData");
  // };

  // const getAllLinks = async () => {
  //   const data = await getLinks();
  //   setLinks(data);
  // };

  // const onLikeButtonClick = () => {
  //   setLike(like + (isLike ? -1 : 1));
  //   setIsLike(!isLike);
  // };

  const handleInput = (event) => {
    setPost({
      like: 15,
      dislike: 55,
      channelName: "Channel Name",
      title: "Title",
      link: "https://www.youtube.com/embed/Ua3wlssr6rw?si=oMOEOnlZZ1vMEGUB",
      imgUrl:
        "https://starnewsrus.com/wp-content/uploads/2022/12/img_6388c20fa0a52.jpg",
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3000/posts/", { ...post })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

    inputValue.current.value = "";
    getAllComments();
  };

  const getAllComments = async () => {
    const data = await getInputValue();
    setComment(data);
  };

  useEffect(() => {
    // getAllLinks();
    getAllComments();
    // getLike();
  }, []);

  return (
    <Box>
      {/* {links?.map((item, index) => {
        if (item.id === id) {
          return (
            <div key={index}>
              <ReactPlayer url={item.link} width="100%" height="70vh" />
              <div className="details">
                <h3>{item.title}</h3>
                <div className="others">
                  <img src={item.imgUrl} alt="" />
                  <span>
                    <h4>{item.channelName}</h4>
                    <h6> {item.subscribers} подписчиков</h6>
                  </span>

                  <button className="subscribe">Subscribe</button>

                  <div className="likes">
                    <button className="like" onClick={updateLike()}>
                      {isLike ? (
                        <AiFillLike
                          className="icon"
                          onClick={() => {
                            setIsLike(!isLike);
                            updateLike();
                          }}
                        />
                      ) : (
                        <AiOutlineLike
                          className="icon"
                          onClick={() => {
                            setIsLike(!isLike);
                            updateLike();
                          }}
                        />
                      )}
                    </button>

                    <button className="dislike" onClick={updateLike()}>
                      {isLike ? (
                        <AiOutlineDislike
                          className="icon"
                          onClick={() => {
                            setIsLike(!isLike);
                          }}
                        />
                      ) : (
                        <AiFillDislike
                          className="icon"
                          onClick={() => {
                            setIsLike(!isLike);
                            updateLike();
                          }}
                        />
                      )}
                      <p></p>
                    </button>
                  </div>
                </div>
              </div>

              <div className="commentBox">
                <img src={item.imgUrl} alt="pinterest" />
                <form onSubmit={handleSubmit}>
                  <div className="inputBox">
                    <input
                      type="text"
                      placeholder="Send Comment"
                      onChange={handleInput}
                      name="comment"
                      ref={inputValue}
                    />
                    <button>Send</button>
                  </div>

                  <ul>
                    {comment.map((item, index) => {
                      return <li key={index}>{item.comment}</li>;
                    })}
                  </ul>
                </form>
                <div></div>
              </div>
            </div>
          );
        }
      })} */}

      {posts?.map((item) => {
        if (item.id === id) {
          return (
            <div key={item.id}>
              <ReactPlayer url={item.link} width="100%" height="70vh" />
              <div className="details">
                <h3>{item.title}</h3>
                <div className="others">
                  <img src={item.imgUrl} alt="" />
                  <span>
                    <h4>{item.channelName}</h4>
                    <h6> {item.subscribers} подписчиков</h6>
                  </span>

                  <button className="subscribe">Subscribe</button>
                  <div className="likes">
                    <button className="like">
                      {isLike ? (
                        <AiFillLike
                          className="icon"
                          onClick={() => {
                            handleUpdateLike(item.id);
                            setIsLike(!isLike);
                          }}
                        />
                      ) : (
                        <AiOutlineLike
                          className="icon"
                          onClick={() => {
                            handleUpdateLike(item.id);
                            setIsLike(!isLike);
                          }}
                        />
                      )}
                    </button>

                    <p style={{ fontFamily: "Arial" }}>
                      {isLike ? item.like + 0 : item.like + 1}
                    </p>

                    <button className="dislike">
                      {isLike ? (
                        <AiOutlineDislike
                          className="icon"
                          onClick={() => {
                            handleUpdateDislike(item.id);
                            setIsLike(!isLike);
                          }}
                        />
                      ) : (
                        <AiFillDislike
                          className="icon"
                          onClick={() => {
                            handleUpdateDislike(item.id);
                            setIsLike(!isLike);
                          }}
                        />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="commentBox">
                <img src={item.imgUrl} alt="pinterest" />
                <form onSubmit={handleSubmit}>
                  <div className="inputBox">
                    <input
                      type="text"
                      placeholder="Send Comment"
                      onChange={handleInput}
                      name="comment"
                      ref={inputValue}
                    />
                    <button>Send</button>
                  </div>

                  <ul>
                    {comment.map((item, index) => {
                      return <li key={index}>{item.comment}</li>;
                    })}
                  </ul>
                </form>
                <div></div>
              </div>
            </div>
          );
        }
      })}
    </Box>
  );
};

export default FullScreen;

// {links?.map((item, index) => {
//   return (
//     <div key={index}>
//       <ReactPlayer url={item.link} width="100%" height="70vh" />

//       <div className="details">
//         <h3>{item.title}</h3>
//         <div className="others">
//           <img src={item.imgUrl} alt="" />
//           <span>
//             <h4>{item.channelName}</h4>
//             <h6> {item.subscribers} подписчиков</h6>
//           </span>

//           <button className="subscribe">Subscribe</button>

//           <div className="likes">
//             <button className="like" onClick={onLikeButtonClick}>
//               <AiFillLike className="icon" />
//             </button>
//             <p style={{ fontFamily: "Arial" }}>{item.like}</p>
//             <button className="dislike" onClick={onLikeButtonClick}>
//               <AiFillDislike className="icon" />
//               <p></p>
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="commentBox">
//         <img src={item.imgUrl} alt="pinterest" />
//         <form onSubmit={handleSubmit}>
//           <div className="inputBox">
//             <input
//               type="text"
//               placeholder="Send Comment"
//               onChange={handleInput}
//               name="comment"
//               ref={inputValue}
//             />
//             <button>Send</button>
//           </div>

//           <ul>
//             {comment.map((item, index) => {
//               return <li key={index}>{item.comment}</li>;
//             })}
//           </ul>
//           {/* {comment.map((item, index) => {
//       return <input type="text" value={item.comment} />;
//     })} */}
//         </form>
//         <div></div>
//       </div>
//     </div>
//   );
// })}
