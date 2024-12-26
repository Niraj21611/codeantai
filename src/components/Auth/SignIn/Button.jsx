import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    padding: 1rem;
    font-family: "Inter";
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    background-color: ${(props) => (props.isActive ? 'var(--color-button-primary)' : 'var(--color-brand-secondary)')};
    border: ${(props) => (props.borderStyle ? `${props.borderStyle} var(--color-border)` : 'none')};
    color: ${(props) => (props.isActive ? 'white' : 'black')};
    cursor: pointer;
    padding: 0.75rem;
    border-radius: 0.50rem; 
    width: 50%;
`


function Button({isActive, children, onClick, borderStyle}) {
  return (
    <StyledButton onClick={onClick} isActive={isActive} borderStyle={borderStyle}>{children}</StyledButton>
  )
}

export default Button