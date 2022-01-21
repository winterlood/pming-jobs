import React, { useRef } from "react";
import style from "./ImageSlider.module.scss";
import { Carousel, Image } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

type Props = {
  imageList: string[];
};

const ImageSlider = (props: Props) => {
  const sliderRef = useRef();

  const move = (direct) => {
    if (sliderRef.current) {
      if (direct === "left") {
        // @ts-ignore
        sliderRef.current.next();
      } else {
        // @ts-ignore
        sliderRef.current.prev();
      }
    }
  };
  const cprops = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={style.container}>
      <div className={style.arrow_wrapper} onClick={() => move("right")}>
        <LeftOutlined />
      </div>

      <div className={style.carousel}>
        <Carousel ref={sliderRef} {...cprops}>
          {props.imageList.map((it, idx) => (
            <div className={style.img_wrapper} key={`${it}_${idx}`}>
              <Image className={style.img} alt={it} src={it} />
            </div>
          ))}
        </Carousel>
      </div>
      <div className={style.arrow_wrapper} onClick={() => move("left")}>
        <RightOutlined />
      </div>
    </div>
  );
};

export default ImageSlider;
