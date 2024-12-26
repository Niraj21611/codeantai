import React from "react";
import styled from "styled-components";

const StyledP = styled.p`
  font-family: "Inter";
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  /* line-height: 24px; */
  /* margin-top: 32px; */
  @media (max-width: 768px) {
    font-size: 14px;
  }

`;

function Disclaimer() {
  return (
    <StyledP>
      By signing up you agree to the <strong>Privacy Policy.</strong>
    </StyledP>
  );
}

export default Disclaimer;
