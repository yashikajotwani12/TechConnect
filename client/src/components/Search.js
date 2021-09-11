import React, { useState } from "react";
import styled from "styled-components";
import colors from "../globalStyles/colorStyles";
import { BsSearch } from "react-icons/bs";
export const SearchBarContainer = styled.div`
  background-color: ${colors.greendy};
  width: 80%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  padding: 5px;
  border-radius: 5px;
  margin-top: 100px;
`;

export const InputText = styled.input`
  flex-grow: 1;
  margin-right: 20px;
  border-radius: 5px;
  border: none;
  font-size: 1.5rem;
`;
export const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;
const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (valueInput) => {
    setSearchInput(valueInput);
  };
  return (
    <SearchBarContainer>
      <InputText
        type="text"
        value={searchInput}
        onChange={(e) => handleChange(e.target.value)}
      />
      <SearchIcon>
        <BsSearch color={colors.blackSqueeze} size="32px" />
      </SearchIcon>
    </SearchBarContainer>
  );
};

export default Search;
