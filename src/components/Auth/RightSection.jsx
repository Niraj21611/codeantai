import React from "react";
import styled from "styled-components";
import SignIn from "./SignIn/SignIn";
import Disclaimer from "./Disclaimer";

const StyledDiv = styled.section`
  background-color: var(--color-brand-secondary);
  display: flex;
  width: 100%;
  max-width: 400px;
  height: 90vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 1rem;

  @media (min-width: 768px) {
    max-width: 100%;
    width: 50%;
    height: 710px;
  }
`;

function RightSection() {
  return (
    <StyledDiv>
      <SignIn />
      <Disclaimer/>
    </StyledDiv>
  );
}

export default RightSection;
