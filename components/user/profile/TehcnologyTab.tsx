import React, { useMemo, useState } from "react";
import style from "./TehcnologyTab.module.scss";
import { Common } from "@types";
import Heading from "components/common/Heading";
import Text from "components/common/Text";
import TechIcon from "components/common/TechIcon";
import { Collapse, Tabs } from "antd";
import { Empty } from "antd";

const { Panel } = Collapse;

const TechnologyItem = (props: Common.TechnologyItem) => {
  const { name, summary, descript, iconUrl } = props;
  const [isHide, setIsHide] = useState(true);
  const onChangeCollapse = () => {
    setIsHide(!isHide);
  };
  return (
    <div className={style.item_container}>
      <div className={style.item_head}>
        <TechIcon iconUrl={iconUrl} techName={name} />
        <Text type={"text"} size={"base"} weight={"medium"}>
          {name}
        </Text>
      </div>
      <div></div>
      <Text type={"text"} size={"sm"}>
        {summary}
      </Text>

      {descript && (
        <Collapse onChange={onChangeCollapse} ghost>
          <Panel
            showArrow={false}
            className={style.panel}
            header={
              <Text size={"sm"} color="gray" type={"text"}>
                {isHide ? "더보기" : "줄이기"}
              </Text>
            }
            key="1"
          >
            <div dangerouslySetInnerHTML={{ __html: descript }}></div>
          </Panel>
        </Collapse>
      )}
    </div>
  );
};

const { TabPane } = Tabs;
type Props = {
  technologyCollection: Common.TechnologyCollection[];
};

const TehcnologyTab = ({ technologyCollection }: Props) => {
  const [tabIndex, setTabIndex] = useState(0);
  const curTechData = useMemo(() => {
    return technologyCollection.find((it, idx) => idx === tabIndex);
  }, [tabIndex]);
  return (
    <Tabs
      onChange={(tabIdx) => setTabIndex(parseInt(tabIdx))}
      defaultActiveKey="0"
    >
      {technologyCollection.map((it, idx) => (
        <TabPane tab={<Heading type="h4">{it.name}</Heading>} key={idx}>
          <div className={style.tech_item_wrapper}>
            {curTechData.tehcNologyList.length === 0 ? (
              <Empty
                description={
                  <Text
                    type={"text"}
                    size={"sm"}
                    weight={"regular"}
                    color={"gray"}
                  >
                    {curTechData.name}에 등록된 기술이 없습니다
                  </Text>
                }
                image={Empty.PRESENTED_IMAGE_SIMPLE}
              />
            ) : (
              <>
                {curTechData.tehcNologyList.map((it, idx) => (
                  <TechnologyItem
                    key={`${curTechData.name}_techitem_${idx}`}
                    {...it}
                  />
                ))}
              </>
            )}
          </div>
        </TabPane>
      ))}
    </Tabs>
  );
};

export default TehcnologyTab;
