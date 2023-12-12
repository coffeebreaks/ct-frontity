import {styled} from "frontity";
import {useState, useRef, useEffect} from "react"

const CT_Kundgrupp_Header = ({ api, state }) => {

  const options = state.source.get("acf-settings");
  const formText = options.acf.text
 

const WrapperGrid = styled.div`
        display: grid;
    grid-template-areas:
        "visningsbild logo"
        "visningsbild rubrik"
        "visningsbild ingress"
        "openForm text";
      
    max-width: 1346px;
    width: 100% ;
    grid-template-columns: 50% 50%;
    margin: 1rem auto;
    
    @media (max-width: 900px){display: flex; flex-direction: column;}
  `

  
  
const Logo = styled.img`
  width: 100%;
  grid-area: logo;
  max-width: 460px;
`
const Rubrik = styled.h1`
      font-size: 2.4rem;
      @media (max-width: 1350px){font-size: 1.3rem;}
      font-weight: 700;
      color: #1b4ea4;
      grid-area: rubrik;
      line-height: 1.2;
      text-transform: uppercase;
      margin: 0;
      padding: 1rem;
      `
const Ingress = styled.p`
font-size: 1.6rem;
    font-weight: 600;
    grid-area: ingress;
    margin: 0;
    @media (max-width: 1350px){font-size: 1.2rem;}
    line-height: 1.2;
    color: #525252;
    /* text-transform: uppercase; */
    padding: 0rem 1rem;
    margin: 1rem 0;
`
const Text = styled.p`
  
  font-size: 1.2rem;
    font-weight: 100;
    color: #000000;
    margin: 0;
    grid-area: text;
    /* text-transform: uppercase; */
    /* letter-spacing: 3px; */
    margin: 1rem 0;
    padding: 0 1rem;
   
`
const Visningsbild = styled.img`
    width: 100%;
    grid-area: visningsbild;
    border-radius: 20px;
    max-height: 470px;
    object-fit: cover;
    @media (max-width: 900px){
      max-height: 300px;
      border-radius: 0;
    }

`

const OpenForm = styled.div`
  grid-area: openForm;
`
const OpenFormText = styled.p` 
color: #1b4ea4;
font-size: 1.2rem;
    
    padding: 1rem;
    font-weight: 200;

    border-radius: 22px;`

const OpenFormButton = styled.a`
    display: flex ;
    justify-content: center;
    align-items: center;
    border-style: solid;
    border-width: 2px;
    text-decoration: none;
    text-align: center;
    border-color: #1b4ea4;
 
    color: #1b4ea4;
    background: none;
    border-radius: 20px;
    border-width: 2px;
    padding: 1.2rem;
    font-weight: 700;
    font-size: 1.2rem;
    text-transform: uppercase;
  
    max-width: 250px;

    margin: 0
    &:hover {
    background-color: #ffffff;
    color: #1b4ea4;
    border: 1px solid #1b4ea4;
  }
`

  return (
    <WrapperGrid>
      <Logo src={api.logo.url} />
      <Visningsbild src={api.visningsbild.url} />
      <Rubrik>{api.rubrik}</Rubrik>
      <Ingress>{api.ingress}</Ingress>
      <Text>{api.text}</Text>
      <OpenForm>
        <OpenFormText > {formText}</OpenFormText>
       
      <OpenFormButton href="https://chimneytec.se/kontakt"> Kontakta oss!</OpenFormButton>
    

      </OpenForm>
    </WrapperGrid>
  );
};

export default CT_Kundgrupp_Header
