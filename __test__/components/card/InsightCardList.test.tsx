import InsightCardList from "../../../components/card/InsightCardList";
import { theme } from "../../../styles/theme";
import { render, screen } from "@testing-library/react";
import Wrapper from "../../Wrapper";

const sampleCardList: any = [
  {
    title: "10,20대와 30,40대가 방문하는 쇼핑몰",
    category: "체험형 인사이트",
    displayName: "10,20대와 30,40대가 방문하는 쇼핑몰",
    description:
      "2022년 2월 기준 방문자들의 연령대/성별 분포를 통해 장소별 방문자의 특징을 확인해보세요. ",
  },
  {
    title: "10,20대와 30,40대가 방문하는 쇼핑몰",
    category: "체험형 인사이트",
    displayName: "10,20대와 30,40대가 방문하는 쇼핑몰",
    description:
      "2022년 2월 기준 방문자들의 연령대/성별 분포를 통해 장소별 방문자의 특징을 확인해보세요. ",
  },
  {
    title: "10,20대와 30,40대가 방문하는 쇼핑몰",
    category: "체험형 인사이트",
    displayName: "10,20대와 30,40대가 방문하는 쇼핑몰",
    description:
      "2022년 2월 기준 방문자들의 연령대/성별 분포를 통해 장소별 방문자의 특징을 확인해보세요. ",
  },
  {
    title: "10,20대와 30,40대가 방문하는 쇼핑몰",
    category: "체험형 인사이트",
    displayName: "10,20대와 30,40대가 방문하는 쇼핑몰",
    description:
      "2022년 2월 기준 방문자들의 연령대/성별 분포를 통해 장소별 방문자의 특징을 확인해보세요. ",
  },
  {
    title: "10,20대와 30,40대가 방문하는 쇼핑몰",
    category: "체험형 인사이트",
    displayName: "10,20대와 30,40대가 방문하는 쇼핑몰",
    description:
      "2022년 2월 기준 방문자들의 연령대/성별 분포를 통해 장소별 방문자의 특징을 확인해보세요. ",
  },
  {
    title: "10,20대와 30,40대가 방문하는 쇼핑몰",
    category: "체험형 인사이트",
    displayName: "10,20대와 30,40대가 방문하는 쇼핑몰",
    description:
      "2022년 2월 기준 방문자들의 연령대/성별 분포를 통해 장소별 방문자의 특징을 확인해보세요. ",
  },
  {
    title: "10,20대와 30,40대가 방문하는 쇼핑몰",
    category: "체험형 인사이트",
    displayName: "10,20대와 30,40대가 방문하는 쇼핑몰",
    description:
      "2022년 2월 기준 방문자들의 연령대/성별 분포를 통해 장소별 방문자의 특징을 확인해보세요. ",
  },
  {
    title: "10,20대와 30,40대가 방문하는 쇼핑몰",
    category: "체험형 인사이트",
    displayName: "10,20대와 30,40대가 방문하는 쇼핑몰",
    description:
      "2022년 2월 기준 방문자들의 연령대/성별 분포를 통해 장소별 방문자의 특징을 확인해보세요. ",
  },
  {
    title: "10,20대와 30,40대가 방문하는 쇼핑몰",
    category: "체험형 인사이트",
    displayName: "10,20대와 30,40대가 방문하는 쇼핑몰",
    description:
      "2022년 2월 기준 방문자들의 연령대/성별 분포를 통해 장소별 방문자의 특징을 확인해보세요. ",
  },
  {
    title: "10,20대와 30,40대가 방문하는 쇼핑몰",
    category: "체험형 인사이트",
    displayName: "10,20대와 30,40대가 방문하는 쇼핑몰",
    description:
      "2022년 2월 기준 방문자들의 연령대/성별 분포를 통해 장소별 방문자의 특징을 확인해보세요. ",
  },
  {
    title: "10,20대와 30,40대가 방문하는 쇼핑몰",
    category: "체험형 인사이트",
    displayName: "10,20대와 30,40대가 방문하는 쇼핑몰",
    description:
      "2022년 2월 기준 방문자들의 연령대/성별 분포를 통해 장소별 방문자의 특징을 확인해보세요. ",
  },
  {
    title: "10,20대와 30,40대가 방문하는 쇼핑몰",
    category: "체험형 인사이트",
    displayName: "10,20대와 30,40대가 방문하는 쇼핑몰",
    description:
      "2022년 2월 기준 방문자들의 연령대/성별 분포를 통해 장소별 방문자의 특징을 확인해보세요. ",
  },
  {
    title: "10,20대와 30,40대가 방문하는 쇼핑몰",
    category: "체험형 인사이트",
    displayName: "10,20대와 30,40대가 방문하는 쇼핑몰",
    description:
      "2022년 2월 기준 방문자들의 연령대/성별 분포를 통해 장소별 방문자의 특징을 확인해보세요. ",
  },
  {
    title: "10,20대와 30,40대가 방문하는 쇼핑몰",
    category: "체험형 인사이트",
    displayName: "10,20대와 30,40대가 방문하는 쇼핑몰",
    description:
      "2022년 2월 기준 방문자들의 연령대/성별 분포를 통해 장소별 방문자의 특징을 확인해보세요. ",
  },
];

describe("InsightCardList", () => {
  it("should have white specific place on seven pattern", () => {
    render(
      <InsightCardList cardList={sampleCardList} colorList={["red", "blue"]} />,
      {
        wrapper: Wrapper,
      }
    );

    const cardList = screen.queryAllByTestId("insight-card");

    expect(cardList[1]).toHaveStyle(`background-color: white;`);
    expect(cardList[3]).toHaveStyle(`background-color: white;`);
    expect(cardList[6]).toHaveStyle(`background-color: white;`);
    expect(cardList[7]).toHaveStyle(`background-color: white;`);
    expect(cardList[8]).toHaveStyle(`background-color: white;`);
    expect(cardList[9]).toHaveStyle(`background-color: white;`);
    expect(cardList[10]).toHaveStyle(`background-color: white;`);
    expect(cardList[13]).toHaveStyle(`background-color: white;`);
  });

  it("should have white specific place on evenOdd pattern", () => {
    render(
      <InsightCardList
        cardList={sampleCardList}
        colorList={["red", "blue"]}
        pattern={"evenOdd"}
      />,
      { wrapper: Wrapper }
    );

    const cardList = screen.queryAllByTestId("insight-card");

    expect(cardList[1]).toHaveStyle(`background-color: white;`);
    expect(cardList[3]).toHaveStyle(`background-color: white;`);
    expect(cardList[4]).toHaveStyle(`background-color: white;`);
    expect(cardList[6]).toHaveStyle(`background-color: white;`);
  });
});
