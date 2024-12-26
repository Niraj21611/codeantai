import React, { useState } from "react";
import styled from "styled-components";

const StyledButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  font-family: "Inter";
  font-weight: 600;
  font-size: 16px;
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: none;
  width: 100%;

  background-color: ${(props) =>
    props.selected ? "var(--color-button-primary)" : "white"};
  color: ${(props) => (props.selected ? "white" : '#414651')};
  cursor: pointer;
  text-align: left;


  img{
    filter: ${(props) => (props.selected ? 'invert(1) sepia(1) saturate(0) hue-rotate(0deg)' : 'none')};
  }

`;

const StyledImage = styled.img`
  padding-right: 1rem;

`;

const StyledUpperButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.25rem;
`

const StyledBottomButtonDiv = styled.div`
  display: flex;
  margin-top: 16rem;
  flex-direction: column;
  width: 100%;
  gap: 0.25rem;
  @media (max-width: 768px){
    margin-top: 0.25rem;
  }
`;

const buttonData = [
  { id: 1, text: "Repositories", icon: "/svg/Home.svg" },
  { id: 2, text: "AI Code Review", icon: "/svg/Tag.svg" },
  { id: 3, text: "Cloud Security", icon: "/svg/Cloud.svg" },
  { id: 4, text: "How to Use", icon: "/svg/Mannual.svg" },
  { id: 5, text: "Settings", icon: "/svg/Setting.svg" },
];

const buttonDataBottom = [
  { id: 6, text: "Support", icon: "/svg/Support.svg" },
  { id: 7, text: "Logout", icon: "/svg/Logout.svg" },
];

function Options() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleButtonClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <StyledButtonsContainer>
      <StyledUpperButtonDiv>

      {buttonData.map((button) => (
        <StyledButton
        key={button.id}
        selected={selectedIndex === button.id}
        onClick={() => handleButtonClick(button.id)}
        >
          <StyledImage src={button.icon} />
          {button.text}
        </StyledButton>
      ))}
      </StyledUpperButtonDiv>
      <StyledBottomButtonDiv>
        {buttonDataBottom.map((button) => (
          <StyledButton
            key={button.id}
            selected={selectedIndex === button.id}
            onClick={() => handleButtonClick(button.id)}
          >
            <StyledImage src={button.icon} />
            {button.text}
          </StyledButton>
        ))}
      </StyledBottomButtonDiv>
    </StyledButtonsContainer>
  );
}

export default Options;
export { StyledButton, StyledButtonsContainer, StyledImage };
