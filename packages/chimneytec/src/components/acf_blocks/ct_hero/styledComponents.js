import {styled} from "frontity"

export const ImageWrapper = styled.div`

background-color: rgb(60, 66, 79);
background-image: url('${props=> props.image}');
background-size: cover;
height: 100vh;
background-repeat: no-repeat;
background-position: center;
`
export const Text = styled.div`
padding: 2rem;

h5 {
  margin: 0px;
  padding: 0px;
}

h1 {
    margin: 0px;
    padding: 0px;
    font-weight: 900;
    font-family: "Roboto-Heavy";
}

p {
    max-width: 30ch;
}
`
