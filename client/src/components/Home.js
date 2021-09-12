import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import styled from "styled-components";
import Card from "./Card";
import { mockData } from "../mockData.js";
import ReactPaginate from "react-paginate";
import "../App.css";

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
  const [perPage] = useState(6);
  const [pageCount, setPageCount] = useState(0);
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(0);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };
  const getData = () => {
    const slice = mockData.slice(page, page + perPage);
    console.log(slice);
    setPage(page + perPage);
    setData(slice);
    setPageCount(Math.ceil(mockData.length / perPage));
  };
  useEffect(() => {
    getData();
  }, [offset]);
  return (
    <HomePageContainner>
      <Search />
      <CardsContainer>
        {data.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </CardsContainer>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </HomePageContainner>
  );
};

export default Home;
