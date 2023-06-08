import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const categories = [
  { name: "city", text: "시군구별관광기후지수조회" },
  { name: "area", text: "동네예보조회" },
];

const CategoiresTitle = styled.h1`
  font-size: 10 rem;
  font-style: bold;
  color: white;
  background-color: orange;
  width: 768px;
  margin: 0 auto;
  @media scren and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media scren and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled(NavLink)`
  font-size: 1.2 rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.2rem;

  &.hover {
    color: #495057;
  }

  &.active {
    font-weight: 600;
    border-bottom: 2px solid #cf2225;
    color: #22cf61;
    &:hover {
      color: #dbce3b;
    }
  }

  & + & {
    margin-left: 5rem;
  }
`;

const Categories = () => {
  return (
    <div>
      <CategoiresTitle>
        기상청_관광코스별 관광지 상세 날씨 조회서비스 !
      </CategoiresTitle>
      <CategoriesBlock>
        {categories.map((c) => (
          <Category
            key={c.name}
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to={c.name === "city" ? "/" : `/${c.name}`}
          >
            {c.text}
          </Category>
        ))}
      </CategoriesBlock>
    </div>
  );
};

export default Categories;
