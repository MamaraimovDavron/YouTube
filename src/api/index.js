import axios from "axios";

const getLinks = async () => {
  try {
    const res = await axios.get("http://localhost:8000/posts");
    console.log(res, "res");
    return res.data;
  } catch (error) {}
};

const getInputValue = async () => {
  try {
    const res = await axios.get("http://localhost:8000/posts");
    console.log(res, "post");
    return res.data;
  } catch (error) {}
};
export { getLinks, getInputValue };
