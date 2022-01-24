import {styled} from "frontity"
import ContactForm from "./contactForm"

const Wrapper = styled.div`
    color: black;
`

const StaffWrapper = styled.div`
    display:flex;
    flex-flow: column;
`

const StaffImage = styled.div`
    background: url(${(props)=> props.image});
    background-position:center;
    background-size: cover;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    margin: 0 auto;
`

const StaffTitle = styled.p`
font-weight: 500;
text-align:center;
color: black;
font-size:1.2rem;
font-weight: 800;
`

const kontaktuppgifter = styled.div`

`
const StaffName = styled.p`
text-align:center;
font-size: 1.2rem;
font-weight: 800;
`

const StaffContact = styled.div`
text-align:center;
`

const LocationsWrapper = styled.div`
display:flex;
justify-content: center;
flex-flow: row;

@media(max-width: 800px){
    flex-flow:column;
}
`

const AddressBlock = styled.div`
    background:gray;
    margin: 1rem;
    color: white;
    background: #1b4ea4;
    border-radius:23px;
    padding: 1rem;
    @media(max-width: 800px){
        text-align:center;
    }
`

const Map = styled.div`
iframe {
    display:flex;
    margin: 0 auto;
}

@media(max-width: 800px) {
    width: 100%;
}
`

const FormWrapper = styled.div`
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
`

const ContactBlock =({api})=> {
    console.log(api)
    return (
        <Wrapper>
            <StaffWrapper>
                <StaffImage image={api.portrattbild.url}/>
                <StaffName>
                    Stefan Berglund
                </StaffName>
                <StaffTitle>
                    {api.titel}
                </StaffTitle>
                <StaffContact dangerouslySetInnerHTML={{__html: api.kontaktuppgifter}} />
            </StaffWrapper>

            <LocationsWrapper>
                <AddressBlock dangerouslySetInnerHTML={{__html: api.besoksadress }}/>               
                <AddressBlock dangerouslySetInnerHTML={{__html: api.postadress }}/>               
            </LocationsWrapper>
            
            <FormWrapper>  
                <ContactForm/>
            </FormWrapper>

            <Map dangerouslySetInnerHTML={{__html: api.karta}}/> 
            
        </Wrapper>
    )
}

export default ContactBlock