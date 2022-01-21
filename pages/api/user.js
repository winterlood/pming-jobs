// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";
const gh_axios = axios.create({
  baseURL: "https://api.github.com",
});
export default async function handler(req, res) {
  const { access_token, token_type } = req.body;
  console.log({ access_token, token_type });

  const gh_res = await gh_axios
    .get("/user", {
      headers: {
        Authorization: `token ${access_token}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => null);

  if (gh_res) {
    res.status(200).json(gh_res);
  } else {
    res.status(500).json({ err: "ERR" });
  }

  // const splittedStr = gh_res.data.split("&");
  // const resObj = {};
  // splittedStr.forEach((it) => {
  //   const curSplittedStr = it.split("=");
  //   const key = curSplittedStr[0];
  //   const value = curSplittedStr[1];
  //   resObj[key] = value;
  // });

  // if ("access_token" in resObj) {
  //   res.status(200).json(resObj);
  // } else {
  //   res.status(400).json({ error: "ERR" });
  // }
}
