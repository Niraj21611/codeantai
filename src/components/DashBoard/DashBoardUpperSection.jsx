import React from 'react'
import styled from 'styled-components';

const StyledUpperSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 1rem;
`;

const StyledUpperSectionDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;
const StyledSpan = styled.span`
  font-family: "Inter";
  font-weight: ${(props) => props.fontSize};
  font-size: ${(props) => props.textSize};
  line-height: ${(props) => props.lineHeight};
  color: ${(props) => (props.color ? `${props.color}` : "black")};
`;

const StyledButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const StyledButton = styled.button`
  padding: 0.6rem;
  cursor: pointer;
  font-family: "Inter";
  font-weight: 400;
  color: ${(props) => (props.color ? `${props.color}` : "white")};
  display: flex;
  gap: 0.5rem;
  align-items: center;
  background-color: ${(props) =>
    props.background ? `${props.background}` : "white"};
  border: ${(props) => (props.border ? `${props.border}` : "none")};
  border-radius: 0.5rem;
`;

const StyledSearchBarContainer = styled.div`
  display: flex;
  width: 100%;
`;

const StyledSearchBarLabel = styled.label`
  border: 2px solid var(--color-border-primary);
  width: fit-content;
  border-radius: 0.5rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 0.5rem 0.75rem;
  @media (max-width: 768px){
    align-items: flex-start;
    width: 100%;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem; 
  width: 200px; 
  font-weight: 400;
  font-family: "Inter";
  color: inherit; 
  outline: none; 
  border: none;


  &::placeholder {
    color: #4a5568;
    font-size: 14px;
    font-weight: 500;
  }
`;


function DashBoardUpperSection({handleFilter}) {
  return (
    <StyledUpperSection>
    <StyledUpperSectionDiv>
      <StyledHeader>
        <StyledSpan
          fontSize={"600"}
          textSize={"1.50rem"}
          lineHeight={"1.75rem"}
        >
          Repositories
        </StyledSpan>
        <StyledSpan
          fontSize={"500"}
          textSize={"0.85rem"}
          lineHeight={"1.25rem"}
          color={"var(--color-text)"}
        >
          33 total Repositories
        </StyledSpan>
      </StyledHeader>
      <StyledButtonContainer>
        <StyledButton
          color={"black"}
          border={"2px solid var(--color-border-secondary)"}
        >
          <img src={"/svg/refresh.svg"} alt="refresh symbol" />
          Refresh all
        </StyledButton>
        <StyledButton background={"var(--color-button-primary)"}>
          <img src={"/svg/plus.svg"} alt="plus symbol" />
          Add Repository
        </StyledButton>
      </StyledButtonContainer>
      <StyledSearchBarContainer>
        <StyledSearchBarLabel>
          <img src={"/svg/search.svg"} alt='search symbol'/>
          <StyledInput
            id={`inputSearch`}
            placeholder={`Search Repositories`}
            onChange={handleFilter}
          />
        </StyledSearchBarLabel>
      </StyledSearchBarContainer>
    </StyledUpperSectionDiv>
  </StyledUpperSection>
  )
}

export default DashBoardUpperSection