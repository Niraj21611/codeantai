import React from "react";
import styled from "styled-components";
import DataMock from "../../data/RepoData";
import Repository from "./Repository";

const StyledContainer = styled.div`
  flex: 1;
  background-color: var(--color-brand-secondary);
  padding: 1rem;
  height: 100vh;
  box-sizing: border-box;
  /* overflow-y: auto; */

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

const StyledUpperSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  /* border-bottom: 1px solid; */
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
  font-size: 0.75rem; /* text-xs */
  width: 200px; /* w-[200px] */
  color: inherit; /* Default text color */
  outline: none; /* outline-none */
  border: none;

  &::placeholder {
    color: #4a5568; /* placeholder:text-gray-700 */
    font-size: 14px;
    font-weight: 500;
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

function Respositories() {
  return (
    <StyledContainer>
      <StyledInnerDiv>
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
                <img src={"/svg/refresh.svg"} alt="" />
                Refresh all
              </StyledButton>
              <StyledButton background={"var(--color-button-primary)"}>
                <img src={"/svg/plus.svg"} alt="" />
                Add Repository
              </StyledButton>
            </StyledButtonContainer>
            <StyledSearchBarContainer>
              <StyledSearchBarLabel>
                <img src={"/svg/search.svg"} />
                <StyledInput
                  id={`inputSearch`}
                  placeholder={`Search Repositories`}
                />
              </StyledSearchBarLabel>
            </StyledSearchBarContainer>
          </StyledUpperSectionDiv>
        </StyledUpperSection>
        <StyledBottomSection>
          {DataMock.map((repo, index) => (
            <Repository key={repo.title} data={DataMock[index]} />
          ))}
        </StyledBottomSection>
      </StyledInnerDiv>
    </StyledContainer>
  );
}

export default Respositories;
