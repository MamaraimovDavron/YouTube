import axios from "axios";

const getLinks = async () => {
  try {
    const res = await axios.get("http://localhost:8000/posts");
    console.log(res, "res");
    return res.data;
  } catch (error) {}
};

const getLikes = async () => {
  try {
    const res = await axios.get("http://localhost:8000/posts");
    console.log(res, "res + id");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const getInputValue = async () => {
  try {
    const res = await axios.get("http://localhost:8000/posts");
    console.log(res, "post");
    return res.data;
  } catch (error) {}
};

// const putLikes = async () => {
//   try {
//     const res = await axios.put("http://localhost:8000/posts/1");
//     console.log(res, "put");
//     return res.data;
//   } catch (error) {}
// };

export { getLinks, getInputValue, getLikes };
