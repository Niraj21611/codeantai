import React from "react";
import styled from "styled-components";
import BackCard from "./BackCard";
import FrontCard from "./FrontCard";

const StyledDiv = styled.div`
  background-color: var(--color-brand-primary);
  display: none;
  width: 50%;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const StyledAuthLogo = styled.img`
  position: absolute;
  left: 0px;
  bottom: 0;
  width: 300px;
  aspect-ratio: 1/1;
`;


function LeftSection() {
  return (
    <StyledDiv>
      <StyledAuthLogo src={"/svg/authLogo.svg"} />
      <BackCard/>
      <FrontCard/>
    </StyledDiv>
  );
}

export default LeftSection;
