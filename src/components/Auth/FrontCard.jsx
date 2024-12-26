import React from "react";
import styled from "styled-components";

const StyledCardContainer = styled.div`
  display: flex;
  border-radius: 0.75rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  flex-direction: column;
  gap: 0.5rem;
  padding: 0rem 2rem;
  transform: translateX(50%) translateY(-10px);
  background-color: white;
`;

const StyledCardHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 0;
  width: 100%;
  gap: 5rem;
`;

const StyledHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledText = styled.span`
  color: ${(props) => (props.fontcolor ? `${props.fontcolor}` : "black")};
  font-size: ${(props) => props.fontsize};
  font-weight: ${(props) => props.fontweight};
`;

const StyledInnerContent = styled.div`
  display: flex;
  gap: 0.25rem;
`;

const StyledBottomContainer = styled.div`
 padding: 0.50rem 0;
`;

const StyledBottomContent = styled.div`
  display: flex;
  flex-direction: column;
`;

function FrontCard() {
  return (
    <StyledCardContainer>
      <StyledCardHeader>
        <img src={"/svg/GraphAuth.svg"} />
        <StyledHeaderContent>
          <StyledInnerContent>
            <img src={"/svg/Arrow.svg"} alt="" />
            <StyledText
              fontsize={"14px"}
              fontweight={"700"}
              fontcolor={"#0049C6"}
            >
              14%
            </StyledText>
          </StyledInnerContent>
          <StyledText fontsize={"12px"} fontweight={"500"}>
            This week
          </StyledText>
        </StyledHeaderContent>
      </StyledCardHeader>
      <StyledBottomContainer>
        <StyledBottomContent>
          <StyledText fontsize={"14px"} fontweight={"700"}>
            Issues Fixed
          </StyledText>
          <StyledText fontsize={"32px"} fontweight={"700"}>
            500K+
          </StyledText>
        </StyledBottomContent>
      </StyledBottomContainer>
    </StyledCardContainer>
  );
}

export default FrontCard;
