import styled from "styled-components"

const color = {
  Color1: "rgba(1, 116, 223, 1)",
  colorLink: "rgba(136, 136, 136, 1)",
}

export const Button = styled.button`
  @import url("https://fonts.googleapis.com/css?family=Spicy+Rice&display=swap");
  background-color: ${color.Color1};
  background-color: ${props => props.background};
  border-radius: 5px;
  border: none;
  box-shadow: 4px 5px 12px -6px rgba(0, 0, 0, 0.75);
  color: ${props => props.color};
  font-family: "Spicy Rice", cursive;
  height: 50px;
  margin-left: 10px;
  padding: 10px, 20px, 10px;
  &:hover {
    background: rgba(103, 108, 144, 1);
    transition: 500ms;
  }
`
