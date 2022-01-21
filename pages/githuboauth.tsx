import { useRouter } from "next/router";
import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthStore } from "./_app";

const GitHubOAuth = () => {
  const { auth, login } = useContext(AuthStore);
  const router = useRouter();
  const { code } = router.query;

  const run = async () => {
    const res = await axios
      .post("/api/login", { code: code })
      .then((res) => res.data)
      .catch((err) => null);

    if (res) {
      const { access_token, scope, token_type } = res;
      login(access_token, scope, token_type);
    }
  };
  useEffect(() => {
    if (code) {
      run();
    }
  }, [code]);

  useEffect(() => {
    if (auth) {
      localStorage.setItem("auth", JSON.stringify(auth));
      router.replace("/home");
    }
  }, [auth]);

  return <div>{code}</div>;
};
export default GitHubOAuth;
