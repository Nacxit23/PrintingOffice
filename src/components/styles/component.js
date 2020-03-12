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
export const ElementLink = styled.a`
  @import url("https://fonts.googleapis.com/css?family=Oswald&display=swap");

  color: ${color.colorLink};
  font-family: "Oswald", sans-serif;
  font-size: 20px;
  font-weight: 700;
`
