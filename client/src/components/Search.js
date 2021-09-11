import React from "react";
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
`;

export const InputText = styled.input`
  flex-grow: 1;
  margin-right: 10px;
  border-radius: 5px;
  border: none;
`;
export const SerachIcon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;
const Search = () => {
  return (
    <SearchBarContainer>
      <InputText type="text" />
      <SerachIcon>
        <BsSearch color={colors.blackSqueeze} size="32px" />
      </SerachIcon>
    </SearchBarContainer>
  );
};

export default Search;
