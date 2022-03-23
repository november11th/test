import React from "react";
import FullPageContainer from "../../layout/FullPageContainer";
import styled from "@emotion/styled";
import PuzzleLoadingIcon from "./PuzzleLoadingIcon";

const Inside = styled.div`
  margin: auto;
`;

const PuzzleLoading = () => {
  return (
    <FullPageContainer>
      <Inside>
        <PuzzleLoadingIcon />
      </Inside>
    </FullPageContainer>
  );
};

export default PuzzleLoading;
