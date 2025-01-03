import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;
  justify-content: center;
`;

function AuthLayout({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}

export default AuthLayout;
