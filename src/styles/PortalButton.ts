import styled, { css } from "styled-components"

interface ButtonProps {
  width?: number
  maxWidth?: number
  height?: number
  maxHeight?: number
  marginLeft?: number
}

const PortalButton = styled.button<ButtonProps>`
  background: transparent;
  border-radius: 50%;
  align-self: flex-end;
  font-family: "Merienda One", sans-serif;
  font-size: 16px;
  letter-spacing: 1px;
  border: 0.5px solid #d8dde6;
  color: #5a2e3c;
  text-decoration: none;
  margin: 20px 5px 5px 1em;
  padding: 30px;
  background: #b0aac0;
  cursor: pointer;
`

export default PortalButton
