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
  color: #5a2e3c;
  text-decoration: none;
  margin: 60px 5px 5px -7px;
  padding: 20px;
  background: rgba(246, 246, 246, 0.3);
  cursor: pointer;
  opacity: 0.7;
`

export default PortalButton
