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
  border-radius: 3px;
  border: 2px solid white;
  color: white;
  margin: 5px 1em;
  padding: 0.25em 1em;
`

export default Button
