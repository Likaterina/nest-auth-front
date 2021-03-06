import styled, { css } from "styled-components"

interface ButtonProps {
  width?: number
  maxWidth?: number
  height?: number
  maxHeight?: number
  marginLeft?: number
}

const Button = styled.button<ButtonProps>`
  background: transparent;
  border-radius: 5px;
  font-family: "Merienda One", sans-serif;
  font-size: 16px;
  letter-spacing: 1px;
  border: 0.5px solid #d8dde6;
  color: #5a2e3c;
  margin: 5px 1em;
  padding: 0.6em 1.9em;
  background: rgba(246, 246, 246, 0.3);
  cursor: pointer;
`

export default Button
