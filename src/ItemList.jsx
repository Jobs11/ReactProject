import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PdItem from "./PdItem";
import axios from "axios";

const ItemListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const ItemList = ({ category }) => {
  const [cityTours, setCityTours] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === "city" ? "city" : `${category}`;
        var response;
        switch (query) {
          case "city":
            response = await axios.get(
              "https://apis.data.go.kr/1360000/TourStnInfoService1/getCityTourClmIdx1?serviceKey=LzDx7%2Bk8yaJc5%2BACVd1%2BoOThG2TNhRbGbLvLy2iSXEaDrLDQ7HuPHniqQvlc%2FL%2FL7z675HvMCc254wRZ241sJw%3D%3D&pageNo=1&numOfRows=10&dataType=JSON&CURRENT_DATE=2018123110&DAY=360&CITY_AREA_ID=1123000000"
            );
            console.log(response.data.response.body.items.item);
            setCityTours(response.data.response.body.items.item);
            break;

          case "area":
            response = await axios.get(
              "https://apis.data.go.kr/1360000/TourStnInfoService1/getTourStnVilageFcst1?serviceKey=LzDx7%2Bk8yaJc5%2BACVd1%2BoOThG2TNhRbGbLvLy2iSXEaDrLDQ7HuPHniqQvlc%2FL%2FL7z675HvMCc254wRZ241sJw%3D%3D&pageNo=1&numOfRows=10&dataType=JSON&CURRENT_DATE=2018120101&HOUR=24&COURSE_ID=438"
            );

            console.log(response.data.response.body.items.item);
            setCityTours(response.data.response.body.items.item);
            break;

          default:
            alert("카테고리 선택 해주세요.");
        }
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  if (loading) {
    return <ItemListBlock>대기중.....</ItemListBlock>;
  }

  if (!cityTours) {
    console.log("articles 응답이 없습니다. ");
    return null;
  }
  console.log(!cityTours);

  return (
    <ItemListBlock>
      {cityTours.map((article) => (
        <PdItem article={article} />
      ))}
    </ItemListBlock>
  );
};
export default ItemList;
