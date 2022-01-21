// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const og = require("open-graph");

  const { url } = req.query;

  og(url, function (err, meta) {
    res.status(200).json(meta);
  });
}
