import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthStore } from "./_app";

type Props = {};

const Home = (props: Props) => {
  const { auth } = useContext(AuthStore);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (auth) {
      const cached = localStorage.getItem(`contribution-data-${auth.login}`);
      if (cached) {
        setData(JSON.parse(cached));
      }
    }
  }, [auth]);

  const fetchContribution = async () => {
    const res = await axios.post("/api/fetch/contribution", {
      user_name: auth.login,
      access_token: auth.access_token,
    });

    const repoList = [];
    const keyList = Object.keys(res.data.repositories);
    keyList.forEach((it) => {
      repoList.push({
        ...res.data.repositories[it],
      });
    });

    localStorage.setItem(
      `contribution-data-${auth.login}`,
      JSON.stringify(repoList)
    );

    setData(repoList);
  };
  return (
    <div>
      {/* <button onClick={fetchContribution}>갱신하기</button>
      {data?.map((it) => (
        <div
          style={{
            marginBottom: "50px",
            margin: 10,
            border: "1px solid gray",
            padding: 15,
          }}
          key={it.id}
        >
          <img
            style={{ width: "30px", height: "30px" }}
            src={it.openGraphImageUrl}
          />
          <div>{it.nameWithOwner}</div>
          <div>{it.description}</div>
          <div>
            {Math.floor((it.myCommitCount / it.totalCommitCount) * 100)}% 기여
          </div>
          <div>
            {it.languageList.map((it, idx) => (
              <div
                style={{
                  background: it.color,
                  paddingTop: 10,
                  paddingBottom: 10,
                  color: "white",
                }}
                key={`lang_${idx}`}
              >
                <span>{it.name} : </span>
                <span>{it.size} Bytes</span>
              </div>
            ))}
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default Home;
