import React from "react";
import styled from "styled-components";
import Button from "./Button";

const StyledA = styled.a`
font-family: "Inter";
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  display: flex; /* Equivalent to flex */
  align-items: center; /* Equivalent to items-center */
  justify-content: center; /* Equivalent to justify-center */
  width: 100%; /* Equivalent to w-full */
  gap: 0.75rem; /* Equivalent to gap-3 */
  padding: 0.75rem; /* Equivalent to p-2 */
  border: 1px solid #E9EAEB; /* Default border (you can specify color if needed) */
  border-radius: 0.50rem; /* Equivalent to rounded-xl */
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
