import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  /* width: 100%; */
  height: 100vh;
  flex-direction: row;

  @media (max-width: 768px) {
      flex-direction:  column;
      width: max-content;
      display: flex;
      
  }
`;

function DashBoardLayout({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}

export default DashBoardLayout;