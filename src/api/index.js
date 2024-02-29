import axios from "axios";

const getLinks = async () => {
  try {
    const res = await axios.get("http://localhost:3000/posts");
    console.log(res, "res");
    return res.data;
  } catch (error) {}
};

const fetchPosts = async () => {
  try {
    const { data } = await axios.get("http://localhost:3000/posts");
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getLikes = async () => {
  try {
    const res = await axios.get("http://localhost:3000/likes");
    console.log(res, "getLikes");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const getInputValue = async () => {
  try {
    const res = await axios.get("http://localhost:3000/posts");
    // console.log(res, "post");
    return res.data;
  } catch (error) {}
};

// const putLikes = async (id, body) => {
//   try {
//     const res = await axios.put(`http://localhost:3000/likes/${id}`, body);
//     console.log(res, "put");
//     return res.data;
//   } catch (error) {}
// };

const updatePost = async (id, updatedPost) => {
  try {
    const { data } = await axios.put(
      `http://localhost:3000/posts/${id}`,
      updatedPost
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getLinks, getInputValue, getLikes, updatePost, fetchPosts };
