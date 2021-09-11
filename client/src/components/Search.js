import React from "react";
import styled from "styled-components";
import colors from "../globalStyles/colorStyles";
export const SearchBarContainer = styled.div`
  background-color: ${colors.downy};
  width: 60%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  border-radius: 5px;
`;

export const InputText = styled.input`
  flex-grow: 1;
  margin-right: 10px;
  border-radius: 5px;
  border: none;
`;
export const InputButton = styled.input`
  border: none;
  background-color: transparent;
`;
const Search = () => {
  return (
    <SearchBarContainer>
      <InputText type="text" />
      <InputButton type="submit" />
    </SearchBarContainer>
  );
};

export default Search;
