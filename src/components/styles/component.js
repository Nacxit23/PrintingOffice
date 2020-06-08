import styled from "styled-components"

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
    background: rgba(2, 180, 228, 1);
    transition: 500ms;
    color: rgba(69, 71, 90, 1);
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
export const LetterTittle = styled.p`
  font-family: "Pacifico", cursive;
  font-size: ${props => props.size};
  margin-left: ${props => props.left};
  margin-right: ${props => props.right};
  margin-top: ${props => props.top};
  margin-bottom: ${props => props.bottom};
  color: #45475a;
  @media (max-width: 700px) {
    font-size: 67px;
    margin-right: 0px;
    margin-left: 65px;
  }
`
export const Letter = styled.p`
  color: ${props => props.color};
  font-family: "Nunito", sans-serif;
  font-size: ${props => props.size};
  margin-left: ${props => props.left};
  margin-right: ${props => props.right};
  margin-top: ${props => props.top};
  margin-bottom: ${props => props.bottom};
  text-align: justify;

  @media (max-width: 700px) {
    font-size: 28px;
    margin-right: 0;
    margin-left: 10px;
  }
`
