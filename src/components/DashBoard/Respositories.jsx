import React, { useState } from "react";
import styled from "styled-components";
import Data from "../../data/RepoData";
import Repository from "./Repository";
import DashBoardUpperSection from "./DashBoardUpperSection";

const StyledContainer = styled.div`
  flex: 1;
  background-color: var(--color-brand-secondary);
  padding: 1rem;
  height: 100vh;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0rem;
  }
`;

const StyledInnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: var(--color-brand-primary);
  border: 2px solid var(--color-border-primary);
  border-radius: 0.5rem;
  @media (max-width: 768px) {
    width: 100%;
    border: none;
    border-radius: 0;
  }
`;

const StyledBottomSection = styled.div`
  @media (max-width: 768px) {
    max-width: fit-content;
    max-height: 525px;
    overflow-y: auto;
    scrollbar-width: none;
  }
`;

const StyledP = styled.p`
  display: flex;
  justify-content: flex-start;
  padding-bottom: 1rem;
  padding-left: 1rem;
  font-family: "Inter";
  font-size: 16px;
  font-weight: 600;
`;

function Respositories() {
  
  const [filterdData, setFilterdData] = useState(Data)

    const handleFilter = (e) =>{
        const value = e.target.value
        const filtered = Data.filter(item =>
            item.title.toLowerCase().includes(value.toLowerCase()) ||
            item.language.toLowerCase().includes(value.toLowerCase())
        )
        setFilterdData(filtered)
    }
  
  return (
    <StyledContainer>
      <StyledInnerDiv>
        <DashBoardUpperSection handleFilter={handleFilter}/>
        <StyledBottomSection>
          {filterdData.length > 0 ? (
            filterdData.map((repo, index) => (
              <Repository key={repo.title} data={filterdData[index]} />
            ))
          ) : (
            <StyledP>No repositories to display </StyledP>
          )}
        </StyledBottomSection>
      </StyledInnerDiv>
    </StyledContainer>
  );
}

export default Respositories;
