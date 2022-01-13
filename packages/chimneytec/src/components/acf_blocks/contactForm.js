
import {Input, InputLines, InputWrapper, Headline, SectionWrapper} from "./styledComponents"

const contactForm = () => {
    return (
        <SectionWrapper>
        <Headline>
        <h2>Kontakta oss</h2> 

        <p> Lämna dina kontaktuppgifter så hör vi av oss till dig </p>
        </Headline>
        <InputWrapper>
        <Input type="text" placeholder="Ditt telefonnummer"/>
        <Input type="text" placeholder="Din e-post"/>
        <InputLines placeholder="Din fråga"></InputLines>
        <Input type="submit" value="Kontakta oss"/>
        </InputWrapper>
        </SectionWrapper>
    )
}

export default contactForm