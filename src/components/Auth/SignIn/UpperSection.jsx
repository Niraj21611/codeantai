import React from 'react'
import styled from 'styled-components';
import Button from "./Button";

const StyledInnerDiv = styled.div`
  border-bottom: 1px solid #EAEAEB;
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  gap: 1rem;
`;

const StyledImageDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`;

const StyledSpan = styled.div`
font-size: x-large;
  font-weight: 400;
`;

const StyledHeading = styled.div`
    font-family: "Inter";
  display: flex;
  justify-content: center;
  font-size: 32px;
  font-weight: 600;
  margin-top: 0.5rem;
  line-height: 48px;

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 48px;
  }

`;

const StyledUserMethod = styled.div`
  border: 1px solid #E9EAEB;
  border-radius: 0.50rem;
  background-color: var(--color-brand-secondary);
`;


function UpperSection({activeButton, handleButtonClick}) {


  return (
    <StyledInnerDiv>
        <StyledImageDiv>
          <img src={"/svg/logo.svg"} alt="logo" />
          <StyledSpan>CodeAnt AI</StyledSpan>
        </StyledImageDiv>
        <StyledHeading>Welcome to CodeAnt AI</StyledHeading>
        <div>
          <StyledUserMethod>
            <Button
              isActive={activeButton === "saas"}
              onClick={() => handleButtonClick("saas")}
            >
              SAAS
            </Button>
            <Button
              isActive={activeButton === "selfHosted"}
              onClick={() => handleButtonClick("selfHosted")}
            >
              Self Hosted
            </Button>
          </StyledUserMethod>
        </div>
      </StyledInnerDiv>
  )
}

export default UpperSection
export {StyledImageDiv, StyledSpan};