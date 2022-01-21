import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const scope = [
  "user",
  "public_repo",
  "repo",
  "repo_deployment",
  "repo:status",
  "read:repo_hook",
  "read:org",
  "read:public_key",
  "read:gpg_key",
].join(" ");

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <a
        href={`https://github.com/login/oauth/authorize?client_id=3b8af9cde880297e930c&scope=${scope}`}
      >
        깃허브 로그인
      </a> */}
    </div>
  );
}
