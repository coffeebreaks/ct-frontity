import ContactForm from "./contactForm";
import { styled } from "frontity";

const CT_Hero = ({ api }) => {

   const FormSection = styled.div`
  @media(max-width: 700px){
    align-items: flex-start;
    width: 100%;
    max-width: 290px;
  
  }
  margin: 0 auto;
  width: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  `

  const Content = styled.div`
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    display: grid;
    max-width: 1300px;
    margin: 0 auto;
    position: relative;
    @media (max-width: 1100px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
    }
   
  `;
  const ImageWrapper = styled.div`
  background-color: rgb(94 94 94);
  position: relative;
    // background-blend-mode: overlay;
    // background-image: url("${(props) => props.image}");
    // background-size: cover;
    height: 100%;
    min-height: 600px;
    // background-repeat: no-repeat;
    // background-position: center;


  `;
  const Text = styled.div`
    @media(max-width: 1000px){
      display:  flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    position: relative;
    z-index: 100;

    h1 {
      margin-bottom: 16px;
      font-family: Oswald;
      font-weight: 400;
      font-size: 1.125em;
      line-height: 1.55;
      color: #0066ff;
      text-transform: uppercase;
      letter-spacing: 3px;
    }

    h2 {
      margin-bottom: 16px;
      font-family: Oswald;
      font-weight: 600;
      max-width: 600px;
      margin-top: 0px;
      font-size: 4em;
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

      font-size: 24px;
      // background-color: #707070bd;
      font-family: "OpenSans";
      color: #ffffff;
      padding: 1rem;
    }

    @media (max-width: 700px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      justify-content: center;
      h2 {
        font-size: 27px;
        color: white;
        letter-spacing: inherit;
      }

      h1 {
        text-align: center;
      }

      p {
        font-size: 1rem;
      }
    }
  `;
  const Button = styled.a`
      background-color: #0066ffb8;
    padding: 1rem;
    width: -webkit-fit-content;
    border-radius: 23px;
    border: 2px solid #ffffff;
    color: #ffffff;
    width: -moz-fit-content;
    width: fit-content;
    font-weight: 600;
    @media(max-width: 1100px){
    margin: 0 auto;
    }
  `;

  const TextSection = styled.div`
        display: flex;
        padding: 2rem;
        flex-direction: column;
  `

  const BackgroundImage = styled.img`
      width: 100%;
      position: absolute;
      opacity: 0.7;
      height: 100%;
      object-fit: cover;
    `

  return (
    <>
      <ImageWrapper>
        <BackgroundImage src={api.bild} alt="Chimneytec"/>
        <Content>
          <TextSection>
            <Text dangerouslySetInnerHTML={{ __html: api.text }}></Text>
            {/* <Button>Se Installationsvideo </Button> */}
          </TextSection>

          <FormSection >
            <ContactForm color="white"/>
          </FormSection >
        </Content>
      </ImageWrapper>
    </>
  );
};

export default CT_Hero;
