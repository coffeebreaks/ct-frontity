import {styled} from "frontity";
import {useState, useRef, useEffect} from "react"

const CT_Kundgrupp_Links = ({ api, state }) => {

  const options = state.source.get("acf-settings");
  const formText = options.acf.text
 
const WrapperGrid = styled.div`
        display: flex;
        padding: 1rem;
        justify-content: center;
        flex-wrap: wrap;
    
        @media (max-width: 900px){
          display: flex; 
          flex-direction: column;
          align-items: center;
        
        }

        @media (max-width: 1600px){
         
        
        }
       
`

const Image = styled.img`
  width: fit-content;
  width: 300px;
  box-sizing: border-box;
  display: flex ;
  margin: 0 auto; 
  justify-content: center;
  align-items: center;

  border-radius: 15px;
  @media (max-width: 1300px){
    width: 200px;
  }

`

const Rubrik = styled.h1`
  font-size: 1.6rem;
  text-align: left;
  font-weight: 700;
  color: #1b4ea4;
  line-height: 1.2;
  text-transform: uppercase;
  margin: 0;
  padding: 1rem;
  @media (max-width: 1300px){
    font-size: 1.2rem;
  }
  `
const Text = styled.p`
  font-size: 1.2rem;
  font-weight: 100;
  color: #000000;
  text-align: left;
  padding: 0rem 1rem;
  min-height: 200px;
  margin: 1rem 0;
  @media (max-width: 1300px){
    font-size: 1rem;
  }
  @media (max-width: 1766px){
    font-size: 1rem;
  }
`

const Button = styled.button`
  background-color: #1b4ea4;
  color: #ffffff;
  border: none;
  padding: 1rem;
  border-radius: 15px;
  margin: 1rem auto;
  display: block;
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #ffffff;
    color: #1b4ea4;
    border: 1px solid #1b4ea4;
  }`

  const InnerGrid = styled.div`
  margin: 0 1rem;
  max-width: 400px;
  width: 100%;
  display: grid ;
  grid-template-rows: 220px 100px 400px 80px;
  box-sizing: border-box;
  padding: 1rem;
  border-radius: 15px;
  background-color: #ffffff;
  transition: 0.3s;
  @media (max-width: 1766px){

    grid-template-rows: 220px 100px 300px 80px;
    font-size: 1rem;
  }
  @media (max-width: 1300px){
    transform: none;
    gap: 0;
    margin: 0;
    grid-template-rows: auto;
  }
  &:hover {
    transform: scale(1.05) ;
  }
`

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  display: flex; 
  justify-content: center;

`


  return (
    <WrapperGrid>
      {api.links.map((x,i) => (
          <Link href="https://www.chimneytec.se/kontakt">
        <InnerGrid key={i}>
          <Image src={x.bild.url} alt={x.bild.alt} />
          <Rubrik>{x.rubrik}</Rubrik>
          <Text>{x.text}</Text>
          <Button>{x.knapptext}</Button>
        </InnerGrid>
          </Link>
      ))}
    </WrapperGrid>
  );
};

export default CT_Kundgrupp_Links
