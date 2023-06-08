import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const PdItemBlock = styled.div`
  display: flex;

  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 200px;
      height: 200px;
      object-fit: cover;
    }
  }

  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;

//article 임의의 인자값.

const PdItem = ({ article }) => {
  // 비구조화 할당으로 , article.MAIN_TITLE
  const {
    totalCityName,
    tm,
    kmaTci,
    TCI_GRADE,
    courseAreaName,
    courseName,
    spotName,
    rhm,
    pop,
    th3,
  } = article;
  const params = useParams();
  const category = params.category || "city";
  if (category === "city") {
    return (
      <PdItemBlock>
        {/* 제목과 상세 내용  */}
        <div className="thumbnail">
          <img src="weather.png" alt="thumbnail" />
        </div>
        <div className="contents">
          <h2>{totalCityName}</h2>
          <p>예보시각: {tm}</p>
          <p>관광기후지수: {kmaTci}</p>
          <p>관광기후지수등급: {TCI_GRADE}</p>
        </div>
      </PdItemBlock>
    );
  } else {
    return (
      <PdItemBlock>
        {/* 제목과 상세 내용  */}
        <div className="thumbnail">
          <img src="weather.png" alt="thumbnail" />
        </div>
        <div className="contents">
          <h2>{courseAreaName}</h2>
          <p>예보시각: {tm}</p>
          <p>코스이름: {courseName}</p>
          <p>관광지명: {spotName}</p>
          <p>습도: {rhm}</p>
          <p>강수확률: {pop}</p>
          <p>기온: {th3}</p>
        </div>
      </PdItemBlock>
    );
  }
};

export default PdItem;
