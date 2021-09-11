import React from "react";
import Search from "./Search.js";
import styled from "styled-components";
import Card from "./Card";
import { mockData } from "../mockData.js";

export const HomePageContainner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  margin-top: 100px;
`;
const Home = () => {
  return (
    <HomePageContainner>
      <Search />
      <CardsContainer>
        {mockData.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </CardsContainer>
    </HomePageContainner>
  );
};

export default Home;
