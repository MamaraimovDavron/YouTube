import axios from "axios";

const getLinks = async () => {
  try {
    const res = await axios.get("http://localhost:3000.posts");
    console.log(res, "res");
    return res.data;
  } catch (error) {
    console.log("error", error);
  }
};

export { getLinks };
