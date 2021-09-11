import React from "react";
import Search from "./Search.js";
import styled from "styled-components";

export const HomePageContainner = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50px;
`;
const Home = () => {
  return (
    <HomePageContainner>
      <Search />
    </HomePageContainner>
  );
};

export default Home;
