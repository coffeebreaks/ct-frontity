import { styled } from "frontity";









export const ColorFilter = styled.div`
background-color: ${(props) => props.color};
opacity: .8;
z-index: 50;
grid-area: 1/2;
position: absolute;
top: 0px;
left: 0px;
height: 100%;
width: 100%;
min-width: 100vh;

`










export const Button = styled.a`
background-color: blue;
padding: 1rem;
`