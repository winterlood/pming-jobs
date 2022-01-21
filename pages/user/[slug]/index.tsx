import style from "./index.module.scss";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import UserProfile from "components/user/UserProfile";
import { UserProfileProvider } from "context/UserProfileContext";
import { useRecoilCallback } from "recoil";
import { profile } from "data/dummy";
import {
  badgeIdList,
  badgeItem,
  channelIdList,
  channelItem,
  introduceState,
  positionIdList,
  positionItem,
  privateBannerState,
  userState,
} from "recoil/user-profile";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const User = () => {
  const makePdfWithMultipleCanvas = (canvasList: HTMLCanvasElement[]) => {
    var filename = Date.now() + ".pdf";
    var doc = new jsPDF("p", "mm", "a4");

    canvasList.forEach((canvas) => {
      var imgData = canvas.toDataURL("image/png");
      var imgWidth = 210;
      var pageHeight = 295;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;
      var position = 0;
      doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
    });
    doc.save(filename);
  };

  const downloadDomById = (id: string) => {
    var HTML_Width = document.getElementById(id).offsetWidth;
    var HTML_Height = document.getElementById(id).offsetHeight;
    var top_left_margin = 15;
    var PDF_Width = HTML_Width + top_left_margin * 2;
    var PDF_Height = PDF_Width * 1.5 + top_left_margin * 2;

    return new Promise((res) => {
      html2canvas(document.getElementById(id), {
        allowTaint: true,
        useCORS: true,
        height: window.outerHeight + window.innerHeight,
        windowHeight: window.outerHeight + window.innerHeight,
      }).then(function (canvas) {
        res(canvas);
      });
    });
  };

  const download = async () => {
    const section_array = [
      "section_introduce",
      "section_channel",
      "section_position",
      "section_skill",
      "section_experience",
    ];

    const res: HTMLCanvasElement[] = (await Promise.all(
      section_array.map((id) => downloadDomById(id))
    )) as HTMLCanvasElement[];
    makePdfWithMultipleCanvas(res);
  };

  const initData = useRecoilCallback(({ set }) => async () => {
    const res = await profile;
    // banner
    set(privateBannerState, res.privateBannerUrl);

    // user
    set(userState, res.user);

    // user badge
    set(
      badgeIdList,
      res.badgeList.map((it) => it.id)
    );
    res.badgeList.forEach((it) => set(badgeItem(it.id), it));

    // introduce
    set(introduceState, res.user.introduce);

    // channel list
    set(
      channelIdList,
      res.channelList.map((it) => it.id)
    );
    res.channelList.forEach((it) => set(channelItem(it.id), it));
    // position list
    const positionUuidList = res.positionList.map((_) => uuidv4());
    set(positionIdList, positionUuidList);
    res.positionList.forEach((it, idx) =>
      set(positionItem(positionUuidList[idx]), it)
    );
  });

  useEffect(() => {
    initData();
  }, []);

  return <UserProfile />;
};

export async function getServerSideProps({ params }) {
  const { slug } = params;
  return { props: { user: slug, content: "..." } };
}

export default User;
