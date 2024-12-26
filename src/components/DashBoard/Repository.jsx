import React from "react";
import styled from "styled-components";

const StyledRepoContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 2px solid var(--color-border-primary);
  padding: 0.75rem;

`;

const StyledRepoHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 1rem;
  padding-bottom: 0.5rem;
`;

const StyledRepoTitle = styled.span`
  font-family: "Inter";
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
`;

const StyledBadge = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  border: 2px solid var(--color-badge-border);
  color: var(--color-badge-text);
  border-radius: 1rem;
  font-size: 12px;
  font-weight: 500;
  background-color: var(--color-badge-background);
`;

const StyledRepoInfo = styled.div`
  display: flex;
  gap: 2rem;
`;

const StyledRepoInfoSpan = styled.span`
  font-family: "Inter";
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: var(--color-text);
`;

const StyledRepoLanguage = styled.div`
  display: flex;
  gap: 0.5rem;
`;

function Repository({ data }) {
  return (
    <StyledRepoContainer>
      <StyledRepoHeader>
        <StyledRepoTitle>{data.title}</StyledRepoTitle>
        <StyledBadge>{data.type}</StyledBadge>
      </StyledRepoHeader>
      <StyledRepoInfo>
        <StyledRepoLanguage>
          <StyledRepoInfoSpan>{data.language} </StyledRepoInfoSpan>{" "}
          <img src={"/svg/ellipse.svg"} />
        </StyledRepoLanguage>
        <StyledRepoLanguage>
          <img src={"/svg/database.svg"} />
          <StyledRepoInfoSpan>{data.size}</StyledRepoInfoSpan>
        </StyledRepoLanguage>
        <StyledRepoInfoSpan>{data.updatedAt}</StyledRepoInfoSpan>
      </StyledRepoInfo>
    </StyledRepoContainer>
  );
}

export default Repository;