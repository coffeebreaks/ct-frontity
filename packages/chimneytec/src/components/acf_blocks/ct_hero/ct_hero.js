import { ImageWrapper, Text, ColorFilter, TextSection, FormSection } from "./styledComponents";
import ContactForm from "./contactForm"
const CT_Hero = ({ api }) => {
 
  return (
    <>
      <ImageWrapper image={api.bild}>
        <TextSection>
        <Text dangerouslySetInnerHTML={{ __html: api.text }}></Text>
  
      </TextSection>

      <FormSection>
        <ContactForm/>
      </FormSection>
      </ImageWrapper>
    </>
  );
};

export default CT_Hero;
