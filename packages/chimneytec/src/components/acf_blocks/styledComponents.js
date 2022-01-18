import { styled } from "frontity";



export const FormSection = styled.div`
@media(max-width: 700px){
  align-items: flex-start;
  width: 100%;

}
display: flex;
justify-content: center;
align-items: center;

`


export const Headline = styled.div`
display: flex;
flex-direction: column;
color: black;
justify-content: center;
align-items: center;

h2 {
  margin: 1rem;

}

p {
  margin: 0;
  padding: 0 1rem ;
}


`



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

export const SectionWrapper = styled.div`
    background-color: #ffffff75;
    max-width: 470px;
    @media(max-width: 1100px){
      max-width: 100%;
    }
`

export const Input = styled.input`
font-size: 16px;
padding: 1rem 1rem;
margin: .5rem 1rem;
width: 100%;
max-width: 550px;
border: 1px solid #d9d9d9cc;
`

export const InputLines = styled.textarea`
font-size: 16px;
padding: 1rem 1rem;
margin: .5rem 1rem;
width: 100%;
max-width: 550px;
border: 1px solid #d9d9d9cc;
font-family: inherit;

`



export const InputWrapper = styled.div`
display: flex;
padding: 1rem;
margin: 0 auto;
align-items: center;
justify-content: space-around;
flex-wrap: wrap;
margin: 0px;
justify-self: center;



input::placeholder {
  font-weight: 100;
  font-size: 16px;
}

input[type=submit]{
  color: white;
  background: #0066ff;
  max-width: 320px;
  border: none;
}
` 

export const Button = styled.a`
background-color: blue;
padding: 1rem;
`