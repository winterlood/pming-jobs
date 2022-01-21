// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";
const gh_axios = axios.create({
  baseURL: "https://github.com",
});
export default async function handler(req, res) {
  const code = req.body.code;
  console.log("request code is : ", code);

  const gh_res = await gh_axios.post("/login/oauth/access_token", {
    client_id: "3b8af9cde880297e930c",
    client_secret: "c0473757a31830f0a572d0ba0d342575e86cc049",
    code: code,
  });
  console.log(gh_res.data);

  const splittedStr = gh_res.data.split("&");
  const resObj = {};
  splittedStr.forEach((it) => {
    const curSplittedStr = it.split("=");
    const key = curSplittedStr[0];
    const value = curSplittedStr[1];
    resObj[key] = value;
  });

  if ("access_token" in resObj) {
    res.status(200).json(resObj);
  } else {
    res.status(400).json({ error: "ERR" });
  }
}
