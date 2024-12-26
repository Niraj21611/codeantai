import React from "react";
import styled from "styled-components";

const StyledA = styled.a`
font-family: "Inter";
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center; 
  justify-content: center; 
  width: 100%; 
  gap: 0.75rem; 
  padding: 0.75rem; 
  border: 1px solid #E9EAEB; 
  border-radius: 0.50rem;
  text-decoration: none;
  color: black;
`;

const StyledImage = styled.img`
  width: 1.25rem;
`;

function Buttons({ activeButton }) {
  return (
    <>
      <StyledA href={"/dashboard"}>
        <StyledImage src={activeButton === 'saas' ? "/svg/github.svg" : "/svg/gitlab.svg"} alt="Github logo" />{activeButton === 'saas' ? 'Sign in with Github' : 'Self Hosted Gitlab'}
      </StyledA>
      <StyledA href={"/dashboard"}>
        <StyledImage src={activeButton === 'saas' ? "/svg/bitbucket.svg" : "/svg/key.svg"} alt="Github logo" />{activeButton === 'saas' ? 'Sign in with Bitbucket' : 'Sign in with Key'}
      </StyledA>
      {activeButton === "saas" && (
        <>
          <StyledA href={"/dashboard"}>
            <StyledImage src={"/svg/azure-devops.svg"} alt="Github logo" /> Sign
            in with Azure Devops
          </StyledA>
          <StyledA href={"/dashboard"}>
            <StyledImage src={"/svg/gitlab.svg"} alt="Github logo" /> Sign in
            with Gitlab
          </StyledA>
        </>
      )}
    </>
  );
}

export default Buttons;
