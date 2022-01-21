import React from "react";
import style from "./VideoContainer.module.scss";

type Props = {
  videoLink: string;
};

const VideoContainer = (props: Props) => {
  return (
    <div className={style.container}>
      <iframe
        width="560"
        height="315"
        src={props.videoLink}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoContainer;
