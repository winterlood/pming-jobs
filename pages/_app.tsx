import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import "../styles/globals.css";
import "./../styles/variables.less";
import { RecoilRoot } from "recoil";

export const AuthStore = React.createContext(null);

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [auth, setAuth] = useState(null);
  const login = async (access_token, scope, token_type) => {
    const res = await axios
      .post("/api/user", {
        access_token: access_token,
        token_type: token_type,
      })
      .then((res) => res.data)
      .catch((err) => null);
    if (res) {
      setAuth({
        access_token,
        scope,
        token_type,

        ...res,
      });
    }
  };
  const logout = () => {
    setAuth(null);
    localStorage.removeItem("auth");
  };

  useEffect(() => {
    const localData = localStorage.getItem("auth");
    if (localData) {
      setAuth({
        ...JSON.parse(localData),
      });
    }
  }, []);
  return (
    <RecoilRoot>
      <AuthStore.Provider value={{ auth, login, logout }}>
        <Component {...pageProps} />
      </AuthStore.Provider>
    </RecoilRoot>
  );
}

export default MyApp;
