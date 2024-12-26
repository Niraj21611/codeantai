import React from "react";
import styled from "styled-components";

const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 1.75rem;
`;

const StyledCardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid var(--color-border);
`;

const StyledCardTitle = styled.span`
  font-family: "Inter";
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: var(--color-card);
`;

const StyledCardBottom = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1.5rem;
  gap: 2rem;
`;

const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledBottomText = styled.span`
  display: flex;
  justify-content: center;
  color: var(--color-card);
  font-size: ${(props) => props.fontsize};
  font-weight: ${(props) => props.fontweight};
`;

const CardData = [
  { id: 1, text_1: "30+", text_2: "Language Support" },
  { id: 2, text_1: "10K+", text_2: "Developers" },
  { id: 3, text_1: "100K+", text_2: "Hours Saved" },
];

function BackCard() {
  return (
    <StyledCardContainer>
      <StyledCardHeader>
        <img src={"/svg/logo.svg"} />
        <StyledCardTitle>AI to Detect & Autofix Bad Code</StyledCardTitle>
      </StyledCardHeader>
      <StyledCardBottom>
        {CardData.map((data) => (
          <StyledTextContainer key={data.id}>
            <StyledBottomText fontsize={"18px"} fontweight={"700"}>
              {data.text_1}
            </StyledBottomText>
            <StyledBottomText fontsize={"14px"} fontweight={"400"}>
              {data.text_2}
            </StyledBottomText>
          </StyledTextContainer>
        ))}
      </StyledCardBottom>
    </StyledCardContainer>
  );
}

export default BackCard;
