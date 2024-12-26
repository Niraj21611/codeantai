import React, { useState } from "react";
import styled from "styled-components";
import Buttons from "./Buttons";
import UpperSection from "./UpperSection";

const StyledOuterDiv = styled.div`
  background-color: var(--color-brand-primary);
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 0.75rem;
  border: 1.5px solid #E9EAEB;
`;


const StyledButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1.25rem;
  width: 100%;
  max-width: 400px;
  
`;

const StyledButtonsInnerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const StyledButtonsOuterDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 290px;
`;

function SignIn() {
  const [activeButton, setIsActiveButton] = useState("saas");

  const handleButtonClick = (buttonType) => {
    setIsActiveButton(buttonType);
  };


  return (
    <StyledOuterDiv>
      <UpperSection activeButton={activeButton} handleButtonClick={handleButtonClick}/>
      <StyledButtonsOuterDiv>
        <StyledButtonsInnerDiv>
          <StyledButtonsDiv>
            <Buttons activeButton={activeButton} />
          </StyledButtonsDiv>
        </StyledButtonsInnerDiv>
      </StyledButtonsOuterDiv>
    </StyledOuterDiv>
  );
}

export default SignIn;
