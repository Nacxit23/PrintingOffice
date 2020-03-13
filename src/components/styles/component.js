import styled from "styled-components"

const color = {
  Color1: "rgba(1, 116, 223, 1)",
  colorLink: "rgba(136, 136, 136, 1)",
}

export const Button = styled.button`
  background-color: ${color.Color1};
  color: ${props => props.color};
  width: 80px;
  border: none;
`
