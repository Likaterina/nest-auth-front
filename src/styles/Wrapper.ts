import styled from "styled-components"

const Wrapper = styled.div`
  width: 24%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px;
  margin: 3% auto;
  border-radius: 5px;
  box-shadow: 3px 3px 10px 6px #ccc;
  background: ${props => props.theme.main};
`

Wrapper.defaultProps = {
  theme: {
    main: "palevioletred"
  }
}

const theme = {
  main: "#7A5C6B"
}

export default Wrapper
