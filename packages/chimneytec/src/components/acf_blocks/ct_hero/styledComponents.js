import { styled } from "frontity";

export const ImageWrapper = styled.div`
  background-color: rgb(60, 66, 79);
  background-image: url("${(props) => props.image}");
  background-size: cover;
  height: 100%;
  min-height: 600px;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
`;
export const Text = styled.div`
  padding: 2rem;
  position: relative;
  z-index: 100;

  h5 {
    margin: 0px;
    font-size: 20px;
    padding: 0px;
  }

  h1 {
    margin: 0px;
    max-width: 600px;
    font-size: 50px;
    padding: 0px;
    font-weight: 900;
    font-family: "Roboto-Heavy";
  }
  
  p {
    margin-top: 20px;
    padding: 0px;
    max-width: 30ch;
    font-size: 25px;
  }
`;

export const ColorFilter = styled.div`
background-color: ${(props)=> props.color};
opacity: .8;
z-index: 50;
position: absolute;
top: 0px;
left: 0px;
height: 100%;
width: 100%;
min-width: 100vh;

`
