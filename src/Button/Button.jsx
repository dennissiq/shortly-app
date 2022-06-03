import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  background-color: ${(props) =>
    props.primary ? "#2acfcf" : props.secondary ? "transparent" : "none"};

  border: none;
  border-radius: ${(props) => (props.borderless ? `8px` : `30px`)};
  padding: 10px 20px;
  border: 2px solid
    ${(props) =>
      props.primary ? "#2acfcf" : props.secondary ? "transparent" : "none"};

  color: ${(props) =>
    props.primary ? "#ffffff" : props.secondary ? "#9e9aa7" : "none"};

  font-family: "Poppins", sans-serif;
  font-weight: 700;
  transition: 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.primary ? "#36abab" : props.secondary ? "transparent" : "none"};

    border: 2px solid
      ${(props) =>
        props.primary ? "#36abab" : props.secondary ? "#2acfcf" : "none"};

    color: ${(props) =>
      props.primary ? "#ffffff" : props.secondary ? "#2acfcf" : "none"};

    transition: 0.3s ease-in-out;
  }
`

const InvisibleButton = styled.button`
  background-color: transparent;
  border: none;
  color: #bfbfbf;
  font-size: 12px;
  padding: 10px 0;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  letter-spacing: 1px;
  transition: 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    color: #ffffff;
    transition: 0.3s ease-in-out;
  }
`

const Button = ({
  children,
  primary,
  secondary,
  borderless,
  onClick,
  invisible,
}) => {
  const primaryBorderless = primary === undefined && borderless ? true : false

  return invisible ? (
    <InvisibleButton onClick={onClick}>{children}</InvisibleButton>
  ) : (
    <StyledButton
      onClick={onClick}
      primary={primary || primaryBorderless}
      secondary={secondary}
      borderless={borderless}
    >
      {children}
    </StyledButton>
  )
}

export default Button
