import axios from "axios";

const PostSigninData = (Data) => {
  const qs = require("qs");
  axios
    .post(
      "https://swingwizards.onrender.com/tradex/user/login",
      qs.stringify({
        username: Data.username,
        password: Data.password,
      })
    )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default PostSigninData;
