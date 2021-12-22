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
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;

  @media(max-width: 1000px){
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

export const FormSection = styled.div`

display: flex;
jusify-content: center;
align-items: center;

`

export const TextSection = styled.div`
// overflow: hidden;

`

export const Text = styled.div`
  padding: 2rem;
  position: relative;
  z-index: 100;

  h5 {
    margin-bottom: 16px;
    font-family: Oswald;
    font-weight: 400;
    font-size: 1.125em;
    line-height: 1.55;
    color: #f79007;
    text-transform: uppercase;
    letter-spacing: 3px;
  }

  h1 {
    margin-bottom: 16px;
    font-family: Oswald;
    font-weight: 600;
    max-width: 600px;
    margin-top: 0px;
    font-size: 5em;
    line-height: 1.26;
    text-shadow: 4px 5px 15px #00000036;
    color: white;
    letter-spacing: -2px;
  }
  
  p {
    margin-top: 20px;
    padding: 0px;
    max-width: 30ch;
    font-size: 25px;
    font-weight: 100;
    font-size: 24px;
    background: #0a0a0aad;
    padding: 1rem;
  }
`;

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
export const Input = styled.input`
font-size: 16px;
padding: 1rem 1rem;
margin: 0 1rem;
width: 100%;
`

export const InputWrapper = styled.div`
background: red;
display: flex;
padding: 1rem;
margin: 0 auto;
height: 100%;
align-items: center;
justify-content: space-around;
flex-wrap: wrap;
// background: white;
heigth: 100%;
margin: 0px;
justify-self: center;


input::placeholder {
  font-weight: 100;
  font-size: 16px;
}

input[type=submit]{
  color: white;
  background: #f79007;

  border: none;
  
}
` 