import styled from "styled-components"

const color = {
  Color1: "rgba(1, 116, 223, 1)",
  colorLink: "rgba(136, 136, 136, 1)",
}

export const Button = styled.button`
  @import url("https://fonts.googleapis.com/css?family=Spicy+Rice&display=swap");
  background-color: ${props => props.background};
  border-radius: 5px;
  border: none;
  box-shadow: 4px 5px 12px -6px rgba(0, 0, 0, 0.75);
  color: ${props => props.color};
  font-family: "Spicy Rice", cursive;
  height: 50px;
  margin-left: 10px;
  margin-bottom: ${props => props.marginBottom};
  padding: 10px, 20px, 10px;
  &:hover {
    background: rgba(103, 108, 144, 1);
    transition: 500ms;
  }
`
export const Title = styled.h1`
  font-family: "Do Hyeon", sans-serif;
  font-family: "Oswald", sans-serif;
  font-family: "Lobster", cursive;
  font-size: 80px;
  color: ${props => props.color};
  text-shadow: 4px 3px 0 #7a7a7a;
  margin-top: ${props => props.marginTop};
  margin-left: ${props => props.marginLeft};
  @media (max-width: 700px) {
    font-size: 40px;
    margin-top: 20px;
  }
`
export const H1 = styled.h1`
  font-family: "Do Hyeon", sans-serif;
  font-family: "Oswald", sans-serif;
  font-family: "Lobster", cursive;
  font-size: 25px;
  color: ${props => props.color};
  margin-top: ${props => props.marginTop};
  font-size: ${props => props.size};
`
