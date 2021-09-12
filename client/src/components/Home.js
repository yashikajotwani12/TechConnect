import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import styled from "styled-components";
import Card from "./Card";
import { mockData } from "../mockData.js";
import ReactPaginate from "react-paginate";
import "../App.css";
import Navbar from "../Other Components/Navbar.jsx";
import axios from "axios"
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
export const TagContainer = styled.div`
  border-radius: 20px;
  padding: 5px 10px;
  border: solid 1px #858383;
  display: inline-block;
  margin-right: 5px;
  color: #858383;
`;
const Home = () => {
  const [perPage] = useState(6);
  const [pageCount, setPageCount] = useState(0);
  const [dataArr, setDataArr] = useState([]);
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(0);
  const [tag, setTag] = useState("");
  const [usersrender , setusersrender] = useState([]);
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };
  const getData = () => {
    const slice = mockData.slice(page, page + perPage);
    setPage(page + perPage);
    setDataArr(slice);
    setPageCount(Math.ceil(mockData.length / perPage));
  };
  useEffect(() => {
    getData();
  }, [offset]);
  const getUser = async (req,res)=>{
    const output = await axios.get("http://localhost:5000/all_profiles")
    console.log(output.data.user);
    setusersrender(output.data.user);
  }
  useEffect(()=>{
    getUser();
  },[])
  return (<>
    <Navbar />
    <HomePageContainner>

      <Search setTag={setTag} />
      <div style={{ paddingTop: "50px" }}>
        Tags: {tag && <TagContainer>{tag}</TagContainer>}
      </div>
      <CardsContainer>
        {usersrender.map((data) => (
          <Card data={data} />
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
  </>
  );
};

export default Home;
