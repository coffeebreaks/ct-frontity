
import {Input, InputWrapper} from "./styledComponents"

const contactForm = () => {
    return (
        <InputWrapper>
        <Input type="text" placeholder="Ditt namn"/>
        <Input type="text" placeholder="Din e-post"/>
        <Input type="submit" value="Kontakta oss"/>
        </InputWrapper>
    )
}

export default contactForm