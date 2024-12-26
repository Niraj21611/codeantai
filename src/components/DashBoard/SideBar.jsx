import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { StyledSpan } from "../Auth/SignIn/SignIn";
import Options from "./Options";

const StyledContainer = styled.div`
  display: flex; /* Equivalent to 'flex' */
  flex-direction: column; /* Equivalent to 'flex-col' */
  width: 100%;
  background-color: white; /* Equivalent to 'bg-white' */
  border-right: 1px solid var(--color-brand-secondary); /* Equivalent to 'border-r' */
  position: relative; /* Equivalent to 'relative' */

  /* Media query for medium screens and larger */
  @media (min-width: 768px) {
    /* Adjust the breakpoint as needed */
    width: 16rem; 
    height: 100vh; /* Equivalent to 'md:h-screen' */
  }
`;

const StyledInnerDiv = styled.div`
  display: flex; /* Equivalent to 'flex' */
  justify-content: space-between;
  width: 100%; /* Equivalent to 'w-full' */
  padding-top: 1rem;
  padding-left: 1rem; /* Equivalent to 'px-4' (1rem = 4 * 0.25rem) */
  padding-right: 1rem; /* Equivalent to 'px-4' */
  align-items: center; /* Equivalent to 'items-center' */
  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 0;
  }
`;

const StyledImageDiv = styled.div`
  display: flex; /* Equivalent to 'flex' */
  align-items: center; /* Equivalent to 'items-center' */
  justify-content: center; /* Equivalent to 'justify-center' */
  gap: 1rem;
  height: 4rem;
  @media (max-width: 768px) {
    padding: 0rem 1rem;
  }
`;

const StyledNavbarDiv = styled.div`
  background-color: white;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    height: 100%;
  }
`;
const StyledUserDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0.25rem;
  padding-bottom: 0.5rem;
  @media (max-width: 768px){
    padding-bottom: 0;
  }
`;

const StyledUserSpan = styled.span`
  font-family: "Inter";
  margin-top: 0.5rem;
  font-size: 0.95rem;
  border: 2px solid var(--color-border);
  padding: 0.75rem;
  color: var(--color-user);
  border-radius: 0.5rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  cursor: pointer;
  @media (max-width: 768px){
    width: 85%;
    justify-content: space-between;
  }
`;

const StyledBarIconDiv = styled.div`
  display: flex;
  padding-right: 0.5rem;

  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledNavbar = styled.nav`
  flex: 1;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  & > * + * {
    margin-top: 0.5rem;
  }
`;

const StyledNavbarContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  transform: translateY(100%);
  display: flex;
  overflow: hidden;
  transition: all 0.3s ease;
  /* transform: translateY(${({ isSideBarVisible }) =>
    isSideBarVisible ? "0" : "100%"}); */
  height: ${({ isMobile, isSideBarVisible }) =>
    isMobile ? (isSideBarVisible ? "calc(100vh - 64px)" : "0px") : "100%"};

  @media (min-width: 768px) {
    position: static;
    /* height: auto; */
    transform: translateY(0);
    padding: none;
  }
`;

const StyledBarsButton = styled.button`
  border: none;
  background: none;
`


function SideBar() {
  const [isSideBarVisible, setIsSideBarVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const isMobileRef = useRef(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const isMobileLocal = width < 768;
      if (isMobileLocal) {
        setIsMobile(true);
        isMobileRef.current = true;
      } else {
        setIsMobile(false);
        isMobileRef.current = false;
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <StyledContainer>
      <StyledInnerDiv>
        <StyledImageDiv>
          <img src={"/svg/logo.svg"} alt="" />
          <StyledSpan>CodeAnt AI</StyledSpan>
        </StyledImageDiv>
        <StyledBarIconDiv>
          <StyledBarsButton
            onClick={() => {
              setIsSideBarVisible((prevState) => !prevState);
            }}
          >
            <img src={"/svg/bars.svg"} alt="" />
          </StyledBarsButton>
        </StyledBarIconDiv>
      </StyledInnerDiv>
      <StyledNavbarContainer
        isMobile={isMobile}
        isSideBarVisible={isSideBarVisible}
      >
        <StyledNavbarDiv>
          <StyledUserDiv>
            <StyledUserSpan>
              <span>UtkarshDhairyaPanwar...</span>
              <img src={"/svg/chevronDown.svg"} alt="" />
            </StyledUserSpan>
          </StyledUserDiv>
          <StyledNavbar>
            <Options />
          </StyledNavbar>
        </StyledNavbarDiv>
      </StyledNavbarContainer>
    </StyledContainer>
  );
}

export default SideBar;
